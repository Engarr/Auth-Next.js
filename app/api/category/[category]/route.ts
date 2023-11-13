import exercises from '@/lib/data';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export const GET = async (req: Request, { params }: Params) => {
  const { category } = params;
  const exercisesArr = exercises;

  try {
    const categoryExercises = exercisesArr.filter(
      (exercises) => exercises.category === category
    );
    return new Response(JSON.stringify(categoryExercises), {
      status: 200,
    });
  } catch (err) {
    return new Response('Failed to fetch exercises', {
      status: 500,
    });
  }
};
