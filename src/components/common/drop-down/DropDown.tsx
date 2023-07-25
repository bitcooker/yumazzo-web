'use client';
import React, { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { IoIosArrowDown } from 'react-icons/io';
import { Button } from '@/components';

interface IDropDownProps {
  label?: string;
  text?: string;
  isOpen?: boolean;
  setMenu(isOpen: boolean): void;
  children?: React.ReactNode;
}

const DropDown: React.FC<IDropDownProps> = ({
  label,
  text,
  isOpen = false,
  setMenu,
  children,
}) => {
  const ref = useDetectClickOutside({ onTriggered: () => setMenu(false) });

  const onButtonClick = () => {
    setMenu(!isOpen);
  };
  return (
    <div>
      {label && (
        <div className='text-base font-normal leading-normal text-white mb-[10px]'>
          {label}
        </div>
      )}

      <div className='relative' ref={ref}>
        <Button
          variant='rounded'
          color='outline'
          className='flex items-center justify-between w-full px-[11px] py-2'
          onClick={onButtonClick}
        >
          <span className='text-[#E9EAF6] truncate'>{text}</span>
          <IoIosArrowDown />
        </Button>
        {isOpen && children && (
          <div className='absolute  bg-[#121826] rounded-[6px] p-2 mt-[11px] w-full border border-[#8C92AB] z-50'>
            <div className='flex flex-col max-h-[150px] overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-[#663CDD] scrollbar-thumb-rounded p-1'>
              {children}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default DropDown;
