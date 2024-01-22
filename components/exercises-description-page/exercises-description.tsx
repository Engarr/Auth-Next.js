import React from 'react';
import CardContentContainer from '../card-context-container';

type ExercisesDescriptionProps = {
  exerciseName: string;
  muscle1: string[];
  muscle2?: string[];
};

const ExercisesDescription = ({
  exerciseName,
  muscle1,
  muscle2,
}: ExercisesDescriptionProps) => {
  return (
    <div className=' p-10'>
      <h2 className='uppercase  font-bold text-sm lg:text-xl mr-4 lg:mb-6 mb-2'>
        Exercise name:
        <span className='text-[var(--mainColor)]'> {exerciseName}</span>
      </h2>
      <CardContentContainer style='p-5 mx-0'>
        <ul className='list-disc px-5 text-xs md:text-base'>
          <p className='text-[var(--mainColor)] font-semibold text-sm md:text-lg'>
            Main muscles involved in movement:
          </p>
          {muscle1 &&
            muscle1 &&
            muscle1.map((m) => (
              <li className='font-light italic' key={m}>
                {m}
              </li>
            ))}
          {muscle2 && muscle2 && (
            <>
              <p className='text-[var(--mainColor)] font-semibold'>
                Accessory muscles
              </p>
              {muscle2.map((m) => (
                <li className='font-light italic' key={m}>
                  {m}
                </li>
              ))}
            </>
          )}
        </ul>
      </CardContentContainer>
    </div>
  );
};

export default ExercisesDescription;
