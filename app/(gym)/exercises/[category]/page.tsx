'use client';

import Loader from '@/components/loader';
import { QUERY_KEY_EXERCISES, fetchExercises } from '@/lib/fetch-data';
import { useParams } from 'next/navigation';
import React from 'react';
import { UseQueryResult, useQuery } from 'react-query';
import { ExercisesDataType } from '@/lib/type';
import CardContentContainer from '@/components/card-context-container';
import PageDescription from '@/components/category-page/page-description';
import ExercisesSection from '@/components/category-page/category-exercises-section';

const Page = () => {
  const { category } = useParams();

  const { data, isLoading, isError }: UseQueryResult<ExercisesDataType> =
    useQuery(QUERY_KEY_EXERCISES, () => fetchExercises(category as string));

  const { title, description, imageUrl } = data?.description[0] || {};

  return (
    <section className='relative flexCenter mt-28 flex-col'>
      <CardContentContainer>
        <PageDescription
          title={title}
          description={description}
          imageUrl={imageUrl}
        />
      </CardContentContainer>
      <CardContentContainer>
        <ExercisesSection
          category={data?.description[0].category}
          exercises={data?.exercises}
        />
      </CardContentContainer>
    </section>
  );
};

export default Page;
