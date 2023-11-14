import { exercises, exercisesDescription } from '@/lib/data';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export const GET = async (req: Request, { params }: Params) => {
  const { category } = params;

  try {
    const categoryExercises = exercises.filter(
      (exercises) => exercises.category === category
    );
    const categoryDescription = exercisesDescription.filter(
      (exercises) => exercises.category === category
    );
    const response = {
      description: categoryDescription,
      exercises: categoryExercises,
    };

    return new Response(JSON.stringify(response), {
      status: 200,
    });
  } catch (err) {
    return new Response('Failed to fetch exercises', {
      status: 500,
    });
  }
};
