import React from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import { Button, DropDown, TextArea, TextInput } from '@/components';

export default function NewRecipe() {
  return (
    <div className='flex flex-col justify-normal'>
      <div className='flex mb-4'>
        <Button color='text' variant='rounded'>
          <MdArrowBackIosNew />
        </Button>
        <span className='text-lg font-bold text-white ml-[10px]'>
          Add new recipe
        </span>
      </div>

      <hr className='border-[#2E3347]' />

      <div className='grid grid-cols-2 gap-3 my-6'>
        <TextInput label='Name' />
        <DropDown label='Origin' text='Country Origin'></DropDown>
      </div>

      <TextArea
        maxWords={200}
        placeholder='Describe your recipe...'
        label='Description'
      />

      <div className='grid grid-cols-2 gap-3 my-6'>
        <DropDown label='Origin' text='Difficulty'></DropDown>
        <TextInput label='Protein' />
      </div>

      <div className='grid grid-cols-2 gap-3'>
        <TextInput label='Cooking Oil?' />
        <TextInput label='Volume' unit='grams' />
      </div>

      <div className='grid grid-cols-2 gap-3 my-6'>
        <TextInput label='Serves' unit='people' />
        <DropDown label='Authenticity' text='Unverified'></DropDown>
      </div>

      <TextInput label='Stock' />

      <Button className='w-full mt-6'>Add Recipe</Button>
    </div>
  );
}
