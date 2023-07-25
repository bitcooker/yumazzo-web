'use client';
import React, { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { IoIosArrowDown } from 'react-icons/io';
import { Button } from '@/components';

interface IDropDownProps {
  label?: string;
  text?: string;
  isOpen?: boolean;
  children?: React.ReactNode;
}

const DropDown: React.FC<IDropDownProps> = ({
  label,
  text,
  isOpen = false,
  children,
}) => {
  const [open, setOpen] = useState(isOpen);
  const ref = useDetectClickOutside({ onTriggered: () => setOpen(false) });

  const onButtonClick = () => {
    setOpen(!open);
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
          <span className='text-[#E9EAF6]'>{text}</span>
          <IoIosArrowDown />
        </Button>
        {open && children && (
          <div className='absolute bg-[#121826] rounded-[6px] p-2 mt-[11px] w-full'>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
export default DropDown;
