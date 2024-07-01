import { FrameRequest, getFrameHtmlResponse, getFrameMessage } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {


  const frameHtmlResponse = getFrameHtmlResponse({
    buttons: [
      {
        action: 'link',
        label: 'Book now',
        target: 'https://xxd-base-hackaton.vercel.app/ticket',
      }
    ],
    image: {
      src: `${NEXT_PUBLIC_URL}/xxd2.png`,
    },
  });

  return new NextResponse(frameHtmlResponse);
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
