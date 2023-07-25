import './globals.css';
import type { Metadata } from 'next';
import { MessageBox } from '@/components';

export const metadata: Metadata = {
  title: 'Yumazzo',
  description: 'A front-end engineering challenge',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://fonts.cdnfonts.com/css/bai-jamjuree'
        />
        <link
          rel='stylesheet'
          href='https://fonts.cdnfonts.com/css/helvetica-neue-5'
        />
      </head>
      <body>
        <div className='flex flex-col items-center justify-center min-h-screen p-2 font-bai-jamjuree'>
          <div className='max-w-[410px] relative bg-yumazzo-neutral-100 min-h-[630px] w-full h-full rounded-[10px] flex flex-col justify-start'>
            <div className='relative flex w-full h-full p-6'>{children}</div>
            <MessageBox />
          </div>
        </div>
      </body>
    </html>
  );
}
