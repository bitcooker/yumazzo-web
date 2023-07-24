import React from 'react';
import { Difficulty } from '@/types';

interface IDifficultyBoxProps {
  difficulty: Difficulty;
  displayMode: 'image' | 'color';
  className?: string;
}

const DifficultyBox: React.FC<IDifficultyBoxProps> = ({
  difficulty,
  displayMode,
  className,
}) => {
  return (
    <div className={className}>
      {displayMode == 'image' && <DifficultyImage difficulty={difficulty} />}
      {displayMode == 'color' && <DifficultyColor difficulty={difficulty} />}
    </div>
  );
};

interface IDifficultyProps {
  difficulty: Difficulty;
}

const DifficultyImage: React.FC<IDifficultyProps> = ({ difficulty }) => {
  return (
    <img
      src={`/images/difficulty-images/${Difficulty[
        difficulty
      ].toLowerCase()}.svg`}
      width={27}
      height={27}
    />
  );
};

const DifficultyColor: React.FC<IDifficultyProps> = ({ difficulty }) => {
  const fillColor =
    difficulty == Difficulty.Easy
      ? '#6CF600'
      : difficulty == Difficulty.Medium
      ? '#F63B00'
      : '#FF003D';
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='12'
      height='12'
      viewBox='0 0 13 12'
      fill='none'
    >
      <path d='M0.5 12V0H12.5V5.5L6 12H0.5Z' fill={fillColor} />
    </svg>
  );
};

export default DifficultyBox;
