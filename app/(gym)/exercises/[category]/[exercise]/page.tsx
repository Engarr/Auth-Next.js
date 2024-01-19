import CardContentContainer from '@/components/card-context-container';
import React from 'react';

type ExercisesDetailsType = {
  params: { category: string; exercise: string };
};

const ExercisesDetails = ({ params }: ExercisesDetailsType) => {
  return (
    <section className='relative flexCenter mt-28 flex-col'>
      <CardContentContainer>{params.exercise}</CardContentContainer>
    </section>
  );
};

export default ExercisesDetails;
