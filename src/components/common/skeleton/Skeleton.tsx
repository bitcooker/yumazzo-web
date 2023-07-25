import React from 'react';
import clsx from 'clsx';

interface ISkeleton {
  variant?: 'square' | 'circle';
  className?: string;
}
const Skeleton: React.FC<ISkeleton> = ({ variant = 'square', className }) => {
  return (
    <div
      className={clsx(
        className,
        `animate-pulse bg-[#7185AA] opacity-20 ${
          variant == 'circle' && 'rounded-full'
        }`
      )}
    ></div>
  );
};

export default Skeleton;
