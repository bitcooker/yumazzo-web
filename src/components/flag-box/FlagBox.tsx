import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import { Skeleton } from '@/components';

interface IFlagBoxProps {
  countryCode?: string;
}

const FlagBox: React.FC<IFlagBoxProps> = ({ countryCode }) => {
  return (
    <div className='flex items-center w-6 h-6'>
      {countryCode ? (
        <ReactCountryFlag
          countryCode={countryCode}
          svg
          style={{ width: '24px' }}
        />
      ) : (
        <Skeleton className='w-6 h-4' />
      )}
    </div>
  );
};

export default FlagBox;
