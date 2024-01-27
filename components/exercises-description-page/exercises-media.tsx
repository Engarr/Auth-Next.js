import React from 'react';
import CardContentContainer from '../card-context-container';

type ExercisesMedia = {
  videoUrl: string[];
};

const ExercisesMedia = ({ videoUrl }: ExercisesMedia) => {
  return (
    <CardContentContainer style='px-5 py-10 flex flex-wrap items-center justify-center flex-col lg:flex-row w-full'>
      {videoUrl?.map((v) => (
        <div
          key={v}
          className='w-[550px] h-[350px] relative mb-3 shadow-xl bg-[var(--exercises-card-bg)] overflow-hidden rounded-md mx-10'>
          <iframe width='100%' height='100%' src={v} allowFullScreen></iframe>
        </div>
      ))}
    </CardContentContainer>
  );
};

export default ExercisesMedia;
