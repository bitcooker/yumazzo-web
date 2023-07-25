'use client';
import React, { useState } from 'react';
import clsx from 'clsx';

interface ITextAreaProps {
  label?: string;
  maxWords?: number;
  placeholder?: string;
  text?: string;
  className?: string;
  onChange?(e: React.FormEvent<HTMLTextAreaElement>): void;
}

const TextArea: React.FC<ITextAreaProps> = ({
  label,
  maxWords,
  placeholder,
  text = '',
  onChange,
  className,
}) => {
  const [inputText, setInputText] = useState(text);
  const onTextChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setInputText(e.currentTarget.value);
    onChange && onChange(e);
  };
  return (
    <div>
      {label && (
        <div className='text-base font-normal leading-normal text-white'>
          {label}
        </div>
      )}

      <textarea
        value={inputText}
        className={clsx(
          className,
          'my-[10px] w-full py-2 px-[11px] outline-none border border-[#5B6178] bg-[#131823] rounded-[6px] text-white focus:ring-4 focus:ring-[#B89FFF] focus:border-[#663CDD] overflow-hidden h-[72px]'
        )}
        maxLength={maxWords}
        placeholder={placeholder}
        onChange={onTextChange}
      />

      {maxWords && (
        <div className='font-normal leading-normal text-[#43495E] text-sm'>
          {`${inputText.length}/${maxWords} Characters`}
        </div>
      )}
    </div>
  );
};

export default TextArea;
