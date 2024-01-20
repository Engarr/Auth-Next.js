export type ExercisesDataType = {
  description: [
    {
      category: string;
      description: string;
      imageUrl: string;
      title: string;
    }
  ];
  exercises: [
    {
      category: string;
      exerciseName: string;
      muscle1: [string];
      muscle2: [string];
      videoUrl: [string];
      imageUrl: string;
      link: string;
    }
  ];
};
export type ExerciseDescription = {
  exerciseName: string;
  category: string;
  muscle1: string[];
  muscle2?: string[];
  imageUrl: string;
  videoUrl: string[];
  link: string;
};
