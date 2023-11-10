import PageTitle from '@/components/UI/page-title';
import ExercisesCard from '@/components/exercises-card';
import { exerciseCategories } from '@/lib/data';
import React from 'react';

const ExercisesPage = () => {
  return (
    <section className='mt-24'>
      <PageTitle>Training Manual</PageTitle>
      <div className='relative mt-[100px] flexCenter gap-4 flex-wrap max-w-[1400px] left-1/2 -translate-x-1/2'>
        {exerciseCategories.map((category, index) => (
          <React.Fragment key={index}>
            <ExercisesCard
              imageUrl={category.src}
              alt={category.alt}
              categoryName={category.name}
              index={index}
              link={category.link}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ExercisesPage;
