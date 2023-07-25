'use client';
import React, { useState, useMemo } from 'react';
import axios from 'axios';
import { NinetyRingWithBg } from 'react-svg-spinners';
import countryList from 'react-select-country-list';
import { MdArrowBackIosNew } from 'react-icons/md';
import { Button, DropDown, TextArea, TextInput } from '@/components';
import { Difficulty, TApiResponse } from '@/types';

export default function NewRecipe() {
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [originText, setOriginText] = useState('Country Origin');
  const [isOriginOpen, setIsOriginOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState(0);
  const [isDifficultyOpen, setIsDifficultyOpen] = useState(false);
  const [protein, setProtein] = useState('');
  const [oil, setOil] = useState('');
  const [volume, setVolume] = useState(0);
  const [serves, setServes] = useState(0);
  const [authenticity, setAuthenticity] = useState('Unverified');
  const [isAuthenticityOpen, setIsAuthenticityOpen] = useState(false);
  const [stock, setStock] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const options = useMemo(() => countryList().getData(), []);

  const onAddRecipe = () => {
    if (name == '') {
      console.error('Name is required.');
      return;
    }
    if (originText == 'Country Origin') {
      console.error('Please select the origin.');
      return;
    }

    setIsSubmitting(true);

    const submitData = {
      name,
      origin,
      description,
      difficulty,
      protein,
      produce: 'Produce',
      spice: 'Hot',
      cookingOil: oil,
      volume,
      serves,
      authenticity,
      stock,
    };
    axios
      .post('/api/recipes', submitData)
      .then((response: TApiResponse) => {
        if (!response.error) {
          console.log(response);
        } else {
          console.error(response.error);
        }
        setIsSubmitting(false);
      })
      .catch((e) => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className='flex flex-col justify-normal'>
      <div className='flex mb-4'>
        <a href='/'>
          <Button color='text' variant='rounded'>
            <MdArrowBackIosNew />
          </Button>
        </a>
        <span className='text-lg font-bold text-white ml-[10px]'>
          Add new recipe
        </span>
      </div>

      <hr className='border-[#2E3347]' />

      <div className='grid grid-cols-2 gap-3 my-6'>
        <TextInput
          label='Name'
          text={name}
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
        />
        <DropDown
          label='Origin'
          text={originText}
          isOpen={isOriginOpen}
          setMenu={(_isOpen) => setIsOriginOpen(_isOpen)}
        >
          {options.map((option, index) => (
            <Button
              key={index}
              color='text'
              className='my-[3px]'
              onClick={() => {
                setOrigin(option.value);
                setOriginText(option.label);
                setIsOriginOpen(false);
              }}
            >
              <span className='truncate'>{option.label}</span>
            </Button>
          ))}
        </DropDown>
      </div>

      <TextArea
        maxWords={200}
        placeholder='Describe your recipe...'
        label='Description'
        text={description}
        onChange={(e) => {
          setDescription(e.currentTarget.value);
        }}
      />

      <div className='grid grid-cols-2 gap-3 my-6'>
        <DropDown
          label='Difficulty'
          text={Difficulty[difficulty]}
          setMenu={(_isOpen) => {
            setIsDifficultyOpen(_isOpen);
          }}
          isOpen={isDifficultyOpen}
        >
          {[0, 1, 2].map((difficulty, index) => (
            <Button
              key={index}
              color='text'
              className='my-[3px]'
              onClick={() => {
                setDifficulty(difficulty);
                setIsDifficultyOpen(false);
              }}
            >
              <span className='truncate'>{Difficulty[difficulty]}</span>
            </Button>
          ))}
        </DropDown>
        <TextInput
          label='Protein'
          text={protein}
          onChange={(e) => setProtein(e.currentTarget.value)}
        />
      </div>

      <div className='grid grid-cols-2 gap-3'>
        <TextInput
          label='Cooking Oil?'
          text={oil}
          onChange={(e) => setOil(e.currentTarget.value)}
        />
        <TextInput
          label='Volume'
          unit='grams'
          text={volume.toString()}
          onChange={(e) => {
            const parseValue = Number(e.currentTarget.value);
            if (!Number.isNaN(parseValue)) setVolume(parseValue);
          }}
        />
      </div>

      <div className='grid grid-cols-2 gap-3 my-6'>
        <TextInput
          label='Serves'
          unit='people'
          text={serves.toString()}
          onChange={(e) => {
            const parseValue = Number(e.currentTarget.value);
            if (!Number.isNaN(parseValue)) setServes(parseValue);
          }}
        />
        <DropDown
          label='Authenticity'
          text={authenticity}
          isOpen={isAuthenticityOpen}
          setMenu={(_isOpen) => {
            setIsAuthenticityOpen(_isOpen);
          }}
        >
          {['Verified', 'Unverified'].map((verification, index) => (
            <Button
              key={index}
              color='text'
              className='my-[3px]'
              onClick={() => {
                setAuthenticity(verification);
                setIsAuthenticityOpen(false);
              }}
            >
              <span className='truncate'>{verification}</span>
            </Button>
          ))}
        </DropDown>
      </div>

      <TextInput
        label='Stock'
        text={stock}
        onChange={(e) => setStock(e.currentTarget.value)}
      />

      <Button
        disabled={isSubmitting}
        className='w-full mt-6 flex items-center justify-center'
        onClick={onAddRecipe}
      >
        {isSubmitting ? (
          <NinetyRingWithBg color='#FFF' />
        ) : (
          <span>Add Recipe</span>
        )}
      </Button>
    </div>
  );
}
