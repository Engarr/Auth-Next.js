'use client';

import Loader from '@/components/loader';
import { QUERY_KEY_EXERCISES, fetchExercises } from '@/lib/fetch-data';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import { UseQueryResult, useQuery } from 'react-query';
import { ExercisesDataType } from '@/lib/type';

const Page = () => {
  const { category } = useParams();

  const { data, isLoading, isError }: UseQueryResult<ExercisesDataType> =
    useQuery(QUERY_KEY_EXERCISES, () => fetchExercises(category as string));

  if (data) {
    console.log(data);
  }
  if (isLoading) {
    return (
      <div className='absolute top-[40%] left-1/2'>
        <Loader message='Loading...' />
      </div>
    );
  }

  return (
    <section className='relative flexCenter mt-28'>
      <div className='shadow-xl p-5 rounded-lg bg-white flex flex-col lg:flex-row justify-center items-center max-w-[1400px] mx-6 2xl:mx-0'>
        <div className='text-center'>
          <h2 className='uppercase text-[var(--mainColor)] font-semibold text-xl lg:text-2xl mr-4 lg:mb-6 mb-2'>
            {data?.description[0].title}
          </h2>
          <p className='lg:tracking-wider lg:text-lg'>
            {data?.description[0].description}
          </p>
        </div>
        {data?.description[0].imageUrl && (
          <Image
            src={data && data?.description[0].imageUrl}
            priority
            alt='muscle image'
            width={550}
            height={200}
          />
        )}
      </div>
    </section>
  );
};

export default Page;
