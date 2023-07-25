import React from 'react';
import { FaTelegram, FaTwitter, FaMediumM } from 'react-icons/fa';
import {
  SearchBox,
  FlagBox,
  Button,
  DifficultyBox,
  TextBox,
} from '@/components';
import { Difficulty } from '@/types';

export default function Home() {
  return (
    <div className='flex flex-col justify-normal'>
      <SearchBox />

      <div className='flex items-center justify-between my-6'>
        <div className='flex'>
          <FlagBox countryCode='ES' />
          <span className='text-sm text-white ml-[10px] text-[13px] font-medium'>
            Spanish Paella
          </span>
        </div>
        <div className='flex items-center'>
          <Button
            className='p-[7px] mr-[5px] text-[10px]'
            color='secondary'
            variant='pill'
          >
            <FaTwitter />
          </Button>
          <Button
            className='p-[7px] mr-[5px] text-[10px]'
            color='secondary'
            variant='pill'
          >
            <FaTelegram />
          </Button>
          <Button
            className='p-[7px] mr-[5px] text-[10px]'
            color='secondary'
            variant='pill'
          >
            <FaMediumM />
          </Button>
          <a href='/new-recipe'>
            <Button
              className='p-[7px] rounded text-[13px] font-normal'
              color='secondary'
              variant='rounded'
            >
              + Add recipe
            </Button>
          </a>
        </div>
      </div>

      <div className='p-[10px] bg-[#131823] rounded-[6px] font-helvetica-neue font-normal'>
        <div className='px-5 py-[10px] bg-[#17CFC4] rounded-[6px]'>
          <div className='flex'>
            <DifficultyBox displayMode='image' difficulty={Difficulty.Medium} />
            <span className='text-lg font-bold ml-[10px]'>{`Difficulty: ${
              Difficulty[Difficulty.Medium]
            }`}</span>
          </div>
          <p className='mt-[15px]'>{`Spanish paella is a traditional rice dish that originated in the Valencia region of Spain. It was originally made with ingredients such as saffron, rabbit, and snails, which were common in the area.`}</p>
        </div>
      </div>

      <div className='mt-6 bg-[#131823] rounded-[6px] px-6 py-[13px] grid grid-cols-2 grid-rows-4 gap-x-6 gap-y-3'>
        <TextBox variant='plain' label='Protein' text='Jumbo Shrimp' />
        <TextBox
          variant='plain'
          label='Spice Level'
          text='Hot'
          className='text-red-500'
        />
        <TextBox variant='gradient' label='Spices' text='Saffron' />
        <TextBox
          variant='gradient'
          label='Cooking Oil'
          text='Spanish Olive Oil'
        />
        <TextBox variant='plain' label='Volume/Weight' text='700g' />
        <TextBox variant='plain' label='Serves' text='4' />
        <TextBox variant='gradient' label='Authenticity' text='Unverified' />
        <TextBox variant='gradient' label='Stock' text='Chicken' />
      </div>
    </div>
  );
}
