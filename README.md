#### 项目部署 

`bun i && bun run dev`

this steps will be auto run when push to this repo:

`docker buildx build -t fast-chat:v1.0.0 .`
`docker tag fast-chat:v1.0.0 starkdylan/fast-chat:v1.0.0`
`docker push starkdylan/fast-chat:v1.0.0`

#### SSO 

env file:

```shell
NEXT_AUTH_SSO_PROVIDERS=zitadel
NEXT_AUTH_SECRET= generate
ZITADEL_CLIENT_ID= your zitadel admin panel
ZITADEL_CLIENT_SECRET= generate in your zitadel admin panel
ZITADEL_ISSUER= sso endpoint
# 防爆破密码:
ACCESS_CODE= generate 
```

postgres use docker:

```shell
cd sso && sudo docker compose up --detach 
```

zitadel admin panel (replase $LATEST with latest version, script failed get version sometimes):

```
LATEST=$(curl -i https://github.com/zitadel/zitadel/releases/latest | grep location: | cut -d '/' -f 8 | tr -d '\r'); ARCH=$(uname -m); case $ARCH in armv5*) ARCH="armv5";; armv6*) ARCH="armv6";; armv7*) ARCH="arm";; aarch64) ARCH="arm64";; x86) ARCH="386";; x86_64) ARCH="amd64";;  i686) ARCH="386";; i386) ARCH="386";; esac; wget -c https://github.com/zitadel/zitadel/releases/download/$LATEST/zitadel-linux-$ARCH.tar.gz -O - | tar -xz && sudo mv zitadel-linux-$ARCH/zitadel /usr/local/bin
```

run (config files: examples in sso folder):

```shell
ZITADEL_MASTERKEY="$(tr -dc A-Za-z0-9 </dev/urandom | head -c 32)"
zitadel start-from-init \
    --config ./zitadel-config.yaml \
    --config ./zitadel-secrets.yaml \
    --steps ./zitadel-init-steps.yaml \
    --masterkey "${ZITADEL_MASTERKEY}"
```

#### TLS

before you do scripts use `sudo`, make sure `/usr/share/nginx/www/` in your nginx folder and allow all options.
certbot need generate some files(domain check).

nginx config looks like:

```shell
server {
        listen       80;
        listen       [::]:80;
        server_name  _;

	      location ^~ /.well-known {
		    allow all;
        	root /usr/share/nginx/www/;
    	  }
```

```shell
yum install snapd -y
systemctl enable --now snapd.socket
ln -s /var/lib/snapd/snap /snap
systemctl start snapd
snap install --classic certbot
ln -s /snap/bin/certbot /usr/bin/certbot
sudo certbot certonly --webroot -w /usr/share/nginx/www/  -d xxx.xxx (your domains) -d xxx.xxx.xxx (sub-domains)

crontab:
sudo certbot renew
```
