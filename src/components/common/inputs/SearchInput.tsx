'use client';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface ISearchInputProps {
  text?: string;
  placeholder?: string;
  onChange?(e: React.FormEvent<HTMLInputElement>): void;
}

const SearchInput: React.FC<ISearchInputProps> = ({
  text,
  placeholder,
  onChange,
}) => {
  const [inputText, setInputText] = useState(text);
  const onInputTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputText(e.currentTarget.value);
    onChange && onChange(e);
  };
  return (
    <div className='relative'>
      <div className='absolute flex items-center w-full h-full pointer-events-none'>
        <div className='text-[20px] text-white mx-[11px]'>
          <AiOutlineSearch />
        </div>
      </div>
      <input
        className={`w-full placeholder:text-[#7185AA] py-2 pl-[35px] pr-[10px] outline-none border border-[#5B6178] bg-[#131823] rounded-[6px] text-white focus:ring-4 focus:ring-[#B89FFF] focus:border-[#663CDD]`}
        value={inputText}
        placeholder={placeholder}
        onChange={onInputTextChange}
      />
    </div>
  );
};

export default SearchInput;
