'use client';

import { QUERY_KEY_EXERCISES, fetchExercises } from '@/lib/fetch-data';
import { useParams } from 'next/navigation';
import React from 'react';
import { UseQueryResult, useQuery } from 'react-query';

const Page = () => {
  const { category } = useParams();
  const { data }: UseQueryResult = useQuery(QUERY_KEY_EXERCISES, () =>
    fetchExercises(category as string)
  );
  if (data) {
    console.log(data);
  }
  return <div>Page</div>;
};

export default Page;
