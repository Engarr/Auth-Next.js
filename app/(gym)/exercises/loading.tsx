'use client';
import Loader from '@/components/loader';

export default function loading() {
  return (
    <div className='absolute top-[40%] left-1/2'>
      <Loader message='Loading...' />
    </div>
  );
}
