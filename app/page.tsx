import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'post',
      label: '--->',
      target: `${NEXT_PUBLIC_URL}/api/frame`,
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/xxd1.png`,
    
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'xxd.xyz',
  description: 'XXD',
  openGraph: {
    title: 'xxd.xyz',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/xxd1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  console.log('NEXT_PUBLIC_URL', NEXT_PUBLIC_URL);
  return (
    <>
      <h1>{NEXT_PUBLIC_URL}</h1>
    </>
  );
}