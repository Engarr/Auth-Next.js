import React from 'react';
import ExercisesCard from '@/components/exercises-card';

type ExercisesSectionType = {
  exercises?: [
    {
      category: string;
      exerciseName: string;
      muscle1: [string];
      muscle2: [string];
      videoUrl: [string];
      imageUrl: string;
      link: string;
    }
  ];
  category?: string;
};

const ExercisesSection = ({ category, exercises }: ExercisesSectionType) => {
  return (
    <>
      <p className='text-center p-4 text-2xl font-bold text-[var(--mainColor)]'>
        Exercises examples
      </p>
      <div className='relative flexCenter gap-5 flex-wrap left-1/2 -translate-x-1/2 p-10'>
        {exercises?.map((item, index) => (
          <React.Fragment key={index}>
            <ExercisesCard
              alt='exercises image'
              categoryName={item.exerciseName}
              imageUrl={item.imageUrl}
              link={`${category}/${item.link}`}
              index={index}
            />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default ExercisesSection;
