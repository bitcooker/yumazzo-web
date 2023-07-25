'use client';
import React, { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import axios from 'axios';
import { useDetectClickOutside } from 'react-detect-click-outside';
import {
  Button,
  SearchInput,
  Skeleton,
  FlagBox,
  DifficultyBox,
} from '@/components';
import { Difficulty, MessageType, TApiResponse, TRecipe } from '@/types';
import { useMessageBox } from '@/hooks';

interface ISearchBoxProps {
  onRecipeSelect(recipe: TRecipe): void;
}

const SearchBox: React.FC<ISearchBoxProps> = ({ onRecipeSelect }) => {
  const [recipes, setRecipes] = useState<TRecipe[]>([]);
  const [searchCount, setSearchCount] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [searchText, setSearchText] = useState('');
  const onSearchTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
  };

  const messageBox = useMessageBox();
  const searchCountRef = useRef(0);
  const ref = useDetectClickOutside({
    onTriggered: () => setShowResults(false),
  });

  useEffect(() => {
    if (searchText != '') {
      setShowResults(true);
      debouncedSearch(searchText);
    } else {
      setShowResults(false);
    }
  }, [searchText]);

  const debouncedSearch = React.useRef(
    debounce((text: string) => {
      search(text);
    }, 200)
  ).current;

  const search = (text: string) => {
    searchCountRef.current = searchCountRef.current + 1;
    setSearchCount(searchCountRef.current);
    axios
      .get(`/api/search?text=${text}`)
      .then((response: TApiResponse) => {
        if (!response.data.error) {
          setRecipes(response.data.data as TRecipe[]);
          searchCountRef.current = searchCountRef.current - 1;
          setSearchCount(searchCountRef.current);
        } else {
          searchCountRef.current = searchCountRef.current - 1;
          setSearchCount(searchCountRef.current);
          messageBox.onOpen(MessageType.error, response.data.error);
        }
      })
      .catch((e) => {
        searchCountRef.current = searchCountRef.current - 1;
        setSearchCount(searchCountRef.current);
        messageBox.onOpen(MessageType.error, e);
      });
  };

  return (
    <div className='relative' ref={ref}>
      <SearchInput
        placeholder='Search cuisine'
        text={searchText}
        onChange={onSearchTextChange}
      />
      {showResults && (
        <div className='z-40 absolute mt-[11px] w-full px-2 rounded-[6px] bg-[#121826] h-[141px] shadow-2xl py-1'>
          <div className='overflow-auto h-full scrollbar-thin scrollbar-thumb-[#663CDD] scrollbar-thumb-rounded'>
            {searchCount == 0 ? (
              <div>
                {recipes.length == 0 ? (
                  <div className='flex w-full h-full text-[#AEB5C1] justify-center items-center'>
                    No Results
                  </div>
                ) : (
                  recipes.map((recipe, index) => (
                    <RecipeRow
                      recipe={recipe}
                      key={index}
                      onRecipeSelect={() => {
                        onRecipeSelect(recipe);
                        setShowResults(false);
                      }}
                    />
                  ))
                )}
              </div>
            ) : (
              <div>
                <Skeleton className='w-full h-[32px] rounded mt-1' />
                <Skeleton className='w-full h-[32px] rounded mt-1' />
                <Skeleton className='w-full h-[32px] rounded mt-1' />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

interface IRecipeRowProps {
  recipe: TRecipe;
  onRecipeSelect(recipe: TRecipe): void;
}

const RecipeRow: React.FC<IRecipeRowProps> = ({ recipe, onRecipeSelect }) => {
  return (
    <Button
      className={`flex w-[96%] justify-between mt-[5px] mx-1 hover:bg-[]`}
      color='text'
      onClick={() => onRecipeSelect(recipe)}
    >
      <div className='flex items-center'>
        <FlagBox countryCode={recipe.origin} />
        <div className='text-white ml-[6px] text-base font-medium truncate'>
          {recipe.name}
        </div>
      </div>
      <div className='flex justify-end items-center ml-2'>
        <DifficultyBox
          displayMode='color'
          difficulty={recipe.difficulty}
          className='mr-[10px]'
        />
        <span className='text-sm font-bold font-bai-jamjuree text-white'>
          {Difficulty[recipe.difficulty]}
        </span>

        <div className='mx-[10px] bg-[#1F2A44] w-[2px] h-6'></div>

        <span className='text-[#AEB5C1] text-sm font-normal'>35min</span>
      </div>
    </Button>
  );
};

export default SearchBox;
