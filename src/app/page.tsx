'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTelegram, FaTwitter, FaMediumM } from 'react-icons/fa';
import {
  SearchBox,
  FlagBox,
  Button,
  DifficultyBox,
  TextBox,
  Skeleton,
} from '@/components';
import { Difficulty, MessageType, TApiResponse, TRecipe } from '@/types';
import { useMessageBox } from '@/hooks';

export default function Home() {
  const [recipe, setRecipe] = useState<TRecipe>();
  const messageBox = useMessageBox();
  useEffect(() => {
    axios
      .get(`/api/recipes/get?id=4`)
      .then((response: TApiResponse) => {
        if (!response.data.error) {
          setRecipe(response.data.data);
        } else {
          messageBox.onOpen(MessageType.error, response.data.error);
        }
      })
      .catch((e) => {
        messageBox.onOpen(MessageType.error, e);
      });
  }, []);

  const onRecipeSelect = (_recipe: TRecipe) => {
    setRecipe(_recipe);
  };

  return (
    <div className='flex flex-col w-full h-full justify-normal'>
      <SearchBox onRecipeSelect={onRecipeSelect} />

      <div className='flex items-center justify-between my-6'>
        <div className='flex items-center'>
          <FlagBox countryCode={recipe?.origin} />
          {recipe ? (
            <div className='text-sm text-white ml-[10px] text-[13px] font-medium truncate mr-2'>
              {recipe.name}
            </div>
          ) : (
            <Skeleton className='w-9 h-4 ml-[10px]' />
          )}
        </div>
        <div className='flex items-center'>
          <Button
            className='p-[7px] mr-[5px] text-xs'
            color='secondary'
            variant='pill'
          >
            <FaTwitter />
          </Button>
          <Button
            className='p-[7px] mr-[5px] text-xs'
            color='secondary'
            variant='pill'
          >
            <FaTelegram />
          </Button>
          <Button
            className='p-[7px] mr-[5px] text-xs'
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
        <div className='px-5 py-[10px] bg-[#17CFC4] rounded-[6px] min-h-[180px]'>
          <div className='flex items-center'>
            <DifficultyBox
              displayMode='image'
              difficulty={recipe?.difficulty}
              className='w-[27px] h-[27px]'
            />
            {recipe ? (
              <span className='text-lg font-bold ml-[10px]'>{`Difficulty: ${
                Difficulty[recipe.difficulty]
              }`}</span>
            ) : (
              <Skeleton className='ml-[10px] h-[25px] w-[120px] bg-white' />
            )}
          </div>
          {recipe ? (
            <p className='mt-[15px]'>{recipe?.description}</p>
          ) : (
            <div className='mt-[15px]'>
              <Skeleton className='m-1 h-5 w-[80%]' />
              <Skeleton className='m-1 h-5 w-full' />
              <Skeleton className='m-1 h-5 w-[45%]' />
            </div>
          )}
        </div>
      </div>

      <div className='mt-6 bg-[#131823] rounded-[6px] px-6 py-[13px] grid grid-cols-2 grid-rows-4 gap-x-6 gap-y-3'>
        <TextBox variant='plain' label='Protein' text={recipe?.protein} />
        <TextBox
          variant='plain'
          label='Spice Level'
          text={recipe?.spice}
          className='text-red-500'
        />
        <TextBox variant='gradient' label='Spices' text={recipe?.spice} />
        <TextBox
          variant='gradient'
          label='Cooking Oil'
          text={recipe?.cookingOil}
        />
        <TextBox
          variant='plain'
          label='Volume/Weight'
          text={recipe && `${recipe.volume}g`}
        />
        <TextBox
          variant='plain'
          label='Serves'
          text={recipe?.serves?.toString()}
        />
        <TextBox
          variant='gradient'
          label='Authenticity'
          text={recipe?.authenticity}
        />
        <TextBox variant='gradient' label='Stock' text={recipe?.stock} />
      </div>
    </div>
  );
}
