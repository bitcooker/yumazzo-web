import React from 'react';
import clsx from 'clsx';
import { Skeleton } from '@/components';

interface ITextBoxProps {
  label?: string;
  text?: string;
  variant: 'plain' | 'gradient';
  className?: string;
}

const TextBox: React.FC<ITextBoxProps> = ({
  label,
  text,
  variant,
  className,
}) => {
  return (
    <div>
      {label && (
        <div className='text-[#7185AA] text-[13px] font-normal'>{label}</div>
      )}
      {text ? (
        <div
          className={clsx(
            className,
            'font-medium text-base font-helvetica-neue',
            variant == 'gradient'
              ? 'bg-gradient-to-br from-[#FFBF43] to-[#FF4869] font-semibold text-transparent bg-clip-text'
              : 'text-white'
          )}
        >
          {text}
        </div>
      ) : (
        <Skeleton className='h-5 my-[2px]' />
      )}
    </div>
  );
};

export default TextBox;
