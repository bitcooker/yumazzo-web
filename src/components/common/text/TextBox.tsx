import React from 'react';
import clsx from 'clsx';

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
    </div>
  );
};

export default TextBox;
