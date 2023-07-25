import React from 'react';
import clsx from 'clsx';

interface IButtonProps {
  color?: 'primary' | 'secondary' | 'text' | 'outline';
  variant?: 'rounded' | 'pill';
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?(e: React.FormEvent<HTMLButtonElement>): void;
}

const colorClassNames: Record<string, string> = {
  primary:
    'bg-[#7E51FF] hover:bg-[#663CDD] active:bg-white active:text-black focus:border focus:border-[#663CDD] focus:ring-4 focus:ring-[#B89FFF] disabled:bg-[#9B78FF] disabled:text-[#B4C5FF]',
  secondary:
    'bg-[#171F2F] hover:bg-[#131823] active:bg-[#A6ACC4] active:text-black focus:border focus:border-[#663CDD] focus:ring-4 focus:ring-[#B89FFF] disabled:bg-[#171F2F] disabled:text-[#8C92AB]',
  text: 'hover:bg-[#B89FFF] hover:text-[#280363] active:bg-[#9B78FF] active:text-white focus:ring-4 focus:text-white focus:ring-[#D5C6FF] disabled:text-[#171F2F]',
  outline:
    'border border-[#5B6178] bg-[#131823] text-[#E9EAF6] hover:border-[#D5C6FF] hover:text-[#D5C6FF] active:border-[#9B78FF] active:text-[#9B78FF] focus:ring-4 focus:text-white focus:ring-[#B89FFF] disabled:text-[#171F2F]',
};

const variantClassNames: Record<string, string> = {
  rounded: 'rounded-[6px]',
  pill: 'rounded-full',
};

const Button: React.FC<IButtonProps> = ({
  color = 'primary',
  variant = 'rounded',
  disabled,
  children,
  className,
  onClick,
}) => {
  return (
    <button
      className={clsx(
        className,
        colorClassNames[color],
        variantClassNames[variant],
        'text-white text-base font-medium p-[7px] outline-none'
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
