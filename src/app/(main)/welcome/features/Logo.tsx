'use client';

// import dynamic from 'next/dynamic';
import Image from 'next/image';
import { memo } from 'react';
import { Center } from 'react-layout-kit';

// TODO: 替换LOGO
// const LogoThree = dynamic(() => import('@lobehub/ui/es/LogoThree'), { ssr: false });
// const LogoSpline = dynamic(() => import('@lobehub/ui/es/LogoThree/LogoSpline'), { ssr: false });

const Logo = memo<{ mobile?: boolean }>(({ mobile }) => {
  const imageStyle = {
    backgroundColor: '#00000000',
    border: '0px solid #00000000 !important',
    boxShadow: '0 0 0 0px #00000000 !important',
  };

  return mobile ? (
    <Center height={240} width={240}>
      {/* <LogoThree size={240} /> */}
      <Image alt="fast-chat" height={150} src="/chatgpt-tran.png" style={imageStyle} width={150} />
    </Center>
  ) : (
    <Center
      style={{
        height: `min(482px, 40vw)`,
        marginBottom: '-10%',
        marginTop: '-20%',
        position: 'relative',
        width: `min(976px, 80vw)`,
      }}
    >
      {/* <LogoSpline height={'min(482px, 40vw)'} width={'min(976px, 80vw)'} /> */}
      <Image alt="fast-chat" height={300} src="/chatgpt-tran.png" style={imageStyle} width={300} />
    </Center>
  );
});

export default Logo;
