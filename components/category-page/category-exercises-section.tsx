import React from 'react';
import ExercisesCard from '@/components/exercises-card';
import { motion } from 'framer-motion';

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
      <motion.p
        className='text-center p-4 text-2xl font-bold text-[var(--mainColor)]'
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}>
        Exercises examples
      </motion.p>
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
