'use client';
import React, { useState } from 'react';

interface ITextInputProps {
  label?: string;
  text?: string;
  unit?: string;
  onChange?(e: React.FormEvent<HTMLInputElement>): void;
}

const TextInput: React.FC<ITextInputProps> = ({
  label,
  text,
  unit,
  onChange,
}) => {
  const [inputText, setInputText] = useState(text);
  const onInputTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputText(e.currentTarget.value);
    onChange && onChange(e);
  };
  return (
    <div>
      {label && (
        <div className='text-base font-normal leading-normal text-white mb-[10px]'>
          {label}
        </div>
      )}

      <div className='relative'>
        <input
          className={`w-full py-2 pl-[11px] ${
            unit ? 'pr-16' : 'pr-[11px]'
          } outline-none border border-[#5B6178] bg-[#131823] rounded-[6px] text-white focus:ring-4 focus:ring-[#B89FFF] focus:border-[#663CDD]`}
          value={inputText}
          onChange={onInputTextChange}
        />
        <span className='absolute w-full h-full items-center flex flex-row-reverse text-sm text-[#E9EAF6] top-0 left-0 pr-[11px] pointer-events-none'>
          {unit}
        </span>
      </div>
    </div>
  );
};

export default TextInput;
