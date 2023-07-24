import React from 'react';
import clsx from 'clsx';

interface IButtonProps {
  color?: 'primary' | 'secondary';
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
