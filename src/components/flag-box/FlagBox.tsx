import React from 'react';
import ReactCountryFlag from 'react-country-flag';

interface IFlagBoxProps {
  countryCode: string;
}

const FlagBox: React.FC<IFlagBoxProps> = ({ countryCode }) => {
  return (
    <div className='flex items-center w-6 h-6'>
      <ReactCountryFlag
        countryCode={countryCode}
        svg
        style={{ width: '24px' }}
      />
    </div>
  );
};

export default FlagBox;
