'use client';
import React from 'react';
import { SearchInput } from '@/components/common';

interface ISearchBoxProps {}

const SearchBox: React.FC<ISearchBoxProps> = ({}) => {
  return <SearchInput placeholder='Search cuisine' />;
};

export default SearchBox;
