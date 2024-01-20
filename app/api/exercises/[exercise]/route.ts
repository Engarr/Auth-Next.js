import { exercises } from '@/lib/data';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export const GET = async (req: Request, { params }: Params) => {
  const { exercise } = params;
  try {
    const exerciseDescription = exercises.filter(
      (exercises) => exercises.link === exercise
    );
    return new Response(JSON.stringify(exerciseDescription), {
      status: 200,
    });
  } catch (err) {
    return new Response('Failed to fetch exercises', {
      status: 500,
    });
  }
};
