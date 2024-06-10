---

# 🚀 FastChatV2

[![GitHub stars](https://img.shields.io/github/stars/FASTX-AI/FastChatV2.svg?style=for-the-badge&label=Stars&color=brightgreen)](https://github.com/FASTX-AI/FastChatV2/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/FASTX-AI/FastChatV2.svg?style=for-the-badge&label=Forks&color=orange)](https://github.com/FASTX-AI/FastChatV2/network/members)
[![GitHub issues](https://img.shields.io/github/issues/FASTX-AI/FastChatV2.svg?style=for-the-badge&label=Issues&color=yellow)](https://github.com/FASTX-AI/FastChatV2/issues)
[![GitHub license](https://img.shields.io/github/license/FASTX-AI/FastChatV2.svg?style=for-the-badge&label=License&color=blue)](https://github.com/FASTX-AI/FastChatV2/blob/main/LICENSE)

Welcome to **FastChatV2** – the next-generation real-time communication platform leveraging cutting-edge AI technologies to deliver an unparalleled user experience. With FastChatV2, you can enjoy seamless conversations, intelligent responses, and advanced features that elevate your communication to the next level.

## 🌟 Features

- **Real-time Communication:** Enjoy instant messaging with lightning-fast response times.
- **AI-Powered Conversations:** Experience intelligent and context-aware responses, powered by state-of-the-art NLP models.
- **Customizable Chatbots:** Easily create and deploy custom chatbots to enhance user interactions.
- **Secure and Private:** Your data is protected with top-notch security protocols ensuring privacy and safety.
- **Multi-Platform Support:** Available on web, mobile, and desktop platforms for a unified communication experience.

## 📸 Screenshots

#### en-US

<img width="1380" alt="image" src="https://github.com/FASTX-AI/FastChatV2/assets/165481157/45ea1bd8-4de3-4d14-ac9a-9db6a60b4fc0">

<img width="1379" alt="image" src="https://github.com/FASTX-AI/FastChatV2/assets/165481157/8ef040fa-9c8f-45f8-901c-e67ca94ddd73">

<img width="1380" alt="image" src="https://github.com/FASTX-AI/FastChatV2/assets/165481157/43d09609-819d-4a65-807a-f93b0e0042c6">


#### zh-CN

<img width="1379" alt="image" src="https://github.com/FASTX-AI/FastChatV2/assets/165481157/9e225300-8ea8-40ee-9e99-566e9ee5585d">

<img width="1381" alt="image" src="https://github.com/FASTX-AI/FastChatV2/assets/165481157/3c7fe75f-6514-4117-ba75-e8b2d88ed3c2">

<img width="1380" alt="image" src="https://github.com/FASTX-AI/FastChatV2/assets/165481157/a90edbd3-8219-4fdf-9e31-8b5002d65ebf">

<img width="1380" alt="image" src="https://github.com/FASTX-AI/FastChatV2/assets/165481157/ad6f2feb-026e-43a2-96cf-00df156a279c">

<img width="1379" alt="image" src="https://github.com/FASTX-AI/FastChatV2/assets/165481157/85d27897-2384-4e76-ae24-c57c1d58d66f">

<img width="1380" alt="image" src="https://github.com/FASTX-AI/FastChatV2/assets/165481157/2024210b-b093-469d-ba15-60f44a554105">

#### For sale

user side:

<img width="1379" alt="image" src="https://github.com/FASTX-AI/FastChatV2/assets/165481157/37190a4c-6a5f-4c91-ae13-175c5e1b9115">

admin panel:

<img width="1376" alt="image" src="https://github.com/FASTX-AI/FastChatV2/assets/165481157/82dd5c05-4f74-4a99-ac0a-3fc2d12fa89e">

#### For key manager

based on: new-api

<img width="1379" alt="image" src="https://github.com/FASTX-AI/FastChatV2/assets/165481157/49c8aea1-7243-4380-99e6-dde9312e0c69">

for user sk quota query:

<img width="1379" alt="image" src="https://github.com/FASTX-AI/FastChatV2/assets/165481157/3a1f98a1-016f-40eb-9664-6de1951599e2">

#### For sso login

<img width="1372" alt="image" src="https://github.com/FASTX-AI/FastChatV2/assets/165481157/3cfd4084-303e-4a8f-aef1-610d58ecc2b0">

sso admin panel:

<img width="1378" alt="image" src="https://github.com/FASTX-AI/FastChatV2/assets/165481157/e2a83654-513c-413f-900c-79e1410047cb">

## 🛠️ Installation

To get started with FastChatV2, follow these simple steps in the end of page.

## 📚 Documentation

For detailed documentation, please visit our [Wiki](https://github.com/FASTX-AI/FastChatV2/wiki).

## 🤝 Contributing

We welcome contributions from the community! Check out our [Contributing Guide](https://github.com/FASTX-AI/FastChatV2/blob/main/CONTRIBUTING.md) to get started.

## 📧 Contact

For any inquiries, please contact us at [fastgptchat@hotmail.com](mailto:fastgptchat@hotmail.com).

---

### Self Hosting commands

`bun i && bun run dev`

this steps will be auto run when push to this repo:

```shell
docker buildx build -t fast-chat:v1.0.0 .
docker tag fast-chat:v1.0.0 starkdylan/fast-chat:v1.0.0
docker push starkdylan/fast-chat:v1.0.0
```

example compose file:

```shell
version: '3.8'
services:
fast-gpt:
image: "starkdylan/fast-chat:v1.0.0"
container_name: "fast-gpt"
restart: always
ports:
- '3210:3210'
environment:
OPENAI_API_KEY: "xxx"
NEXTAUTH_URL: "https://xxx/api/auth"
FEATURE_FLAGS: "-webrtc_sync,-check_updates"
NEXT_AUTH_SSO_PROVIDERS: "zitadel"
NEXT_AUTH_SECRET: "xxx"
ZITADEL_CLIENT_ID: "xxx"
ZITADEL_CLIENT_SECRET: "xxx"
ZITADEL_ISSUER: "xxx"
ACCESS_CODE: "xxx"
OPENAI_PROXY_URL: "xxx"
OPENAI_MODEL_LIST: "gpt-4o=fastgpt-4o,gpt-4=fastgpt-4,gpt-3.5-turbo=fastgpt-3.5-turbo,gpt-4-turbo=fastgpt-4-turbo"
ENABLED_OLLAMA: 0
```

### SSO Login

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
ZITADEL_MASTERKEY="$(tr -dc A-Za-z0-9 < /dev/urandom | head -c 32)"
zitadel start-from-init \
  --config ./zitadel-config.yaml \
  --config ./zitadel-secrets.yaml \
  --steps ./zitadel-init-steps.yaml \
  --masterkey "${ZITADEL_MASTERKEY}"
```

### API/Key Manage

[docker hub](https://hub.docker.com/repositories/starkdylan)

### TLS

before you run scripts use `sudo`, make sure `/usr/share/nginx/www/` in your nginx folder and allow all options.
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

#### Based on `LobeChat`
