export const QUERY_KEY_EXERCISES = 'exercises';

export const fetchExercises = async (category: string) => {
  const response = await fetch(`/api/category/${category}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};
