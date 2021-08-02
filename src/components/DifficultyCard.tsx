import React from 'react';
import { Difficulty } from '../api';
import { DifficultySelect } from '../styles/DifficultyCardStyles';

type Props = {
  difficulty: string;
  setDifficulty: (level: string) => void;
};

const DifficultyCard: React.FC<Props> = ({ difficulty, setDifficulty }) => {
  const difficultyLevels = [];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const [_p, value] of Object.entries(Difficulty)) {
    difficultyLevels.push(value);
  }

  return (
    <DifficultySelect>
      <h3>Select Question Difficulty</h3>
      <div className='radio-wrapper'>
        {difficultyLevels.map((level) => (
          <div key={level} className='row'>
            <input
              type='radio'
              id={level}
              name={level}
              value={level}
              className='hidden'
              checked={difficulty === `${level}`}
              onChange={() => setDifficulty(level)}
            ></input>
            <label htmlFor={level}>
              <span></span>
              {level}
            </label>
          </div>
        ))}
      </div>
    </DifficultySelect>
  );
};

export default DifficultyCard;
