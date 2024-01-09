import Image from 'next/image';
import React from 'react';

type PageDescriptionProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
};

const PageDescription = ({
  title,
  description,
  imageUrl,
}: PageDescriptionProps) => {
  return (
    <div className=' p-10 flex-col xl:flex-row flexCenter'>
      <div className='text-left  lg:px-10 pb-5 xl:pb-0'>
        <h2 className='uppercase text-[var(--mainColor)] font-bold text-xl lg:text-2xl mr-4 lg:mb-6 mb-2'>
          {title}
        </h2>
        <p className=' lg:text-lg '>{description}</p>
      </div>

      {imageUrl && (
        <Image
          src={imageUrl}
          priority
          alt='muscle image'
          width={550}
          height={200}
          className='rounded-md shadow-md'
        />
      )}
    </div>
  );
};

export default PageDescription;
