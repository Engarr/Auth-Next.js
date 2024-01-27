'use client';

import CardContentContainer from '@/components/card-context-container';
import ExercisesDescription from '@/components/exercises-description-page/exercises-description';
import ExercisesMedia from '@/components/exercises-description-page/exercises-media';
import Loader from '@/components/loader';
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
  const { data, isLoading, isError }: UseQueryResult<ExerciseDescription[]> =
    useQuery(QUERY_KEY_EXERCISES_DESC, () =>
      fetchExerciseDescription(exercise as string)
    );

  if (isLoading) {
    return (
      <div className='relative  mt-36 '>
        <Loader message='Loading' />
      </div>
    );
  }
  if (!data) {
    return (
      <div className='relative  mt-36 '>
        <p>ERROR</p>
      </div>
    );
  }

  return (
    <section className='relative flexCenter mt-28 flex-col '>
      <CardContentContainer style='flex items-center justify-center flex-col w-full'>
        <h2 className='uppercase  font-bold text-sm lg:text-xl mr-4 lg:mb-6 mb-2 p-5'>
          Exercise name:{' '}
          <span className='text-[var(--mainColor)] tracking-wide	'>
            {data[0]?.exerciseName}
          </span>
        </h2>

        <ExercisesDescription
          muscle1={data[0]?.muscle1}
          muscle2={data[0]?.muscle2}
          imageUrl={data[0]?.imageUrl}
        />
        <ExercisesMedia videoUrl={data[0]?.videoUrl} />
      </CardContentContainer>
    </section>
  );
};

export default ExercisesDetails;
