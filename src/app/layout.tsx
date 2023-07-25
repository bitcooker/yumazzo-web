import './globals.css';
import type { Metadata } from 'next';

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
          <div className='max-w-[410px] bg-yumazzo-neutral-100 min-h-[630px] w-full rounded-[10px] p-6 flex flex-col justify-start'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
