'use client';
import React, { useState, useEffect } from 'react';
import { FaTelegram, FaTwitter, FaMediumM } from 'react-icons/fa';
import {
  SearchBox,
  FlagBox,
  Button,
  DifficultyBox,
  TextBox,
  Skeleton,
} from '@/components';
import { Difficulty, TRecipe } from '@/types';
import { getRecipes } from '@/actions';

interface IHomeProps {
  searchParams: {
    search?: string;
  };
}

export default function Home({ searchParams }: IHomeProps) {
  const [recipes, setRecipes] = useState<TRecipe[]>([]);
  const [recipe, setRecipe] = useState<TRecipe>();
  useEffect(() => {
    getRecipes(searchParams)
      .then((_recipes) => {
        setRecipes(_recipes);
        setRecipe(_recipes[0]);
      })
      .catch((e) => console.error(e));
  }, [searchParams]);
  return (
    <div className='flex flex-col justify-normal'>
      <SearchBox />

      <div className='flex items-center justify-between my-6'>
        <div className='flex items-center'>
          <FlagBox countryCode={recipe?.origin} />
          {recipe ? (
            <span className='text-sm text-white ml-[10px] text-[13px] font-medium'>
              {recipe.name}
            </span>
          ) : (
            <Skeleton className='w-8 h-4 ml-[10px]' />
          )}
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
              <Skeleton className='ml-[10px] h-[24px] w-36' />
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
