'use client';

import CardContentContainer from '@/components/card-context-container';
import {
  QUERY_KEY_EXERCISES_DESC,
  fetchExerciseDescription,
} from '@/lib/fetch-data';
import { ExerciseDescription } from '@/lib/type';
import React from 'react';
import { UseQueryResult, useQuery } from 'react-query';

type ExercisesDetailsType = {
  params: { category: string; exercise: string };
};

const ExercisesDetails = ({ params }: ExercisesDetailsType) => {
  const { exercise } = params;
  const { data, isLoading, isError }: UseQueryResult<ExerciseDescription> =
    useQuery(QUERY_KEY_EXERCISES_DESC, () =>
      fetchExerciseDescription(exercise as string)
    );
  console.log(exercise);
  if (data) {
    console.log(data);
  }
  return (
    <section className='relative flexCenter mt-28 flex-col'>
      <CardContentContainer>
        <div>
          <h2 className='uppercase  font-bold text-xl lg:text-2xl mr-4 lg:mb-6 mb-2'>
            Exercise name
            <span className='text-[var(--mainColor)]'> {exercise}</span>
          </h2>
        </div>
        <div></div>
      </CardContentContainer>
    </section>
  );
};

export default ExercisesDetails;
