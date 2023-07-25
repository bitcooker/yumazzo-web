'use client';

import React from 'react';
import { useMessageBox } from '@/hooks';
import { MessageType } from '@/types';

const MessageBox = () => {
  const messageBox = useMessageBox();

  return (
    <>
      {messageBox.isOpen && (
        <div
          onClick={() => messageBox.onClose()}
          className='z-50 absolute flex w-full h-full justify-center items-center rounded-[10px] backdrop-blur-md bg-yumazzo-neutral-90/30'
        >
          <div
            className={`p-2 m-5 border border-[#D5C6FF] rounded w-full ${
              messageBox.variant == MessageType.error
                ? 'text-red-500'
                : messageBox.variant == MessageType.success
                ? 'text-green-500'
                : 'text-white'
            } text-center`}
          >
            {messageBox.message}
          </div>
        </div>
      )}
    </>
  );
};

export default MessageBox;
