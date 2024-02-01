import React from 'react';
import CardContentContainer from '../card-context-container';
import Image from 'next/image';

type ExercisesDescriptionProps = {
  muscle1: string[];
  muscle2?: string[];
  imageUrl: string;
};

const ExercisesDescription = ({
  muscle1,
  muscle2,
  imageUrl,
}: ExercisesDescriptionProps) => {
  return (
    <CardContentContainer style='px-5 py-10 mx-0 w-full xl:max-w-[700px] flex items-center justify-center flex-col lg:flex-row w-full'>
      <ul className='list-disc px-5 text-xs md:text-base mb-5 lg:mb-0'>
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
      <div className='w-[300px] h-[250px] relative mb-3 shadow-xl bg-[var(--exercises-card-bg)] overflow-hidden rounded-md'>
        <Image
          src={imageUrl}
          fill
          alt='exercises-image '
          sizes='(max-width: 768px) 100vw, 33vw'
        />
      </div>
    </CardContentContainer>
  );
};

export default ExercisesDescription;
