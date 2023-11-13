import React from 'react';
import { CgGym } from 'react-icons/cg';
import { BiSolidHome } from 'react-icons/bi';
import { MdOutlineLogout } from 'react-icons/md';
import { AiFillGithub, AiOutlineHistory } from 'react-icons/ai';

export const links = [
  { name: 'Home', link: '/home', icon: React.createElement(BiSolidHome) },
  { name: 'Exercises', link: '/exercises', icon: React.createElement(CgGym) },
  {
    name: 'History',
    link: '/history',
    icon: React.createElement(AiOutlineHistory),
  },
  {
    name: 'Logout',
    link: '/',
    icon: React.createElement(MdOutlineLogout),
  },
] as const;

export const providersIcons = [
  { name: 'github', providerIcon: React.createElement(AiFillGithub) },
] as const;

export const exerciseCategories = [
  {
    name: 'Chest',
    alt: 'chest exercise',
    src: 'https://static.strengthlevel.com/images/illustrations/decline-bench-press-1000x1000.jpg',
    link: 'chest',
  },
  {
    name: 'Back',
    alt: 'back exercise',
    src: 'https://static.strengthlevel.com/images/illustrations/pull-ups-1000x1000.jpg',
    link: 'back',
  },
  {
    name: 'Quadriceps',
    alt: 'quadriceps exercise',
    src: 'https://static.strengthlevel.com/images/illustrations/dumbbell-lunge-1000x1000.jpg',
    link: 'quadriceps',
  },
  {
    name: 'Hamstrings/Glutes',
    alt: 'double-headed exercise',
    src: 'https://static.strengthlevel.com/images/illustrations/deadlift-1000x1000.jpg',
    link: 'hamstrings-glutes',
  },
  {
    name: 'Shoulders',
    alt: 'shoulders exercise',
    src: 'https://static.strengthlevel.com/images/illustrations/shoulder-press-1000x1000.jpg',
    link: 'shoulders',
  },
  {
    name: 'Abs',
    alt: 'belly exercise',
    src: 'https://static.strengthlevel.com/images/illustrations/cable-crunch-1000x1000.jpg',
    link: 'abs',
  },
  {
    name: 'Biceps',
    alt: 'biceps exercise',
    src: 'https://static.strengthlevel.com/images/illustrations/dumbbell-curl-1000x1000.jpg',
    link: 'biceps',
  },
  {
    name: 'Triceps',
    alt: 'triceps exercise',
    src: 'https://static.strengthlevel.com/images/illustrations/dips-1000x1000.jpg',
    link: 'triceps',
  },
];

export const exercises = [
  {
    exerciseName: 'Barbell Bench Press',
    category: 'chest',
    url: 'barbell-bench-press',
    muscle1: ['pectoralis major', 'triceps brachii', 'anterior deltoid'],
    muscle2: ['anterior serratus', 'anterior deltoid'],
    videoUrl: [
      'https://www.youtube.com/embed/bmjHkNJr7O0',
      'https://www.youtube.com/embed/l9BBv5bU4ks',
    ],
  },
  {
    exerciseName: 'Incline Barbell Bench Press (Head Down)',
    category: 'chest',
    url: 'incline-barbell-bench-press-head-down',
    muscle1: ['pectoralis major', 'triceps brachii', 'anterior deltoid'],
    videoUrl: ['https://www.youtube.com/embed/qXhjWWl8hrM'],
  },
  {
    exerciseName: 'Barbell Bench Press (30-45° Incline)',
    category: 'chest',
    url: 'barbell-bench-press-30-45-degree-incline',
    muscle1: [
      'pectoralis major clavicular part (upper)',
      'triceps brachii',
      'anterior deltoid',
    ],
    muscle2: ['anterior serratus'],
    videoUrl: ['https://www.youtube.com/embed/LDxaLKO33TQ'],
  },
  {
    exerciseName: 'Dumbbell Bench Press',
    category: 'chest',
    url: 'dumbbell-bench-press',
    muscle1: ['pectoralis major', 'triceps brachii', 'anterior deltoid'],
    videoUrl: ['https://www.youtube.com/embed/ACsYCmLA9Do'],
  },
  {
    exerciseName: 'Dumbbell Bench Press (30-45° Incline)',
    category: 'chest',
    url: 'dumbbell-bench-press-30-45-degree-incline',
    muscle1: ['pectoralis major clavicular part (upper)', 'anterior deltoid'],
    muscle2: ['triceps brachii'],
    videoUrl: ['https://www.youtube.com/embed/C06qMsCzjQ8'],
  },
  {
    exerciseName: 'Dumbbell Bench Press (Head Down on Incline Bench)',
    category: 'chest',
    url: 'dumbbell-bench-press-head-down-on-incline-bench',
    muscle1: [
      'pectoralis major sternal part (lower)',
      'triceps brachii',
      'anterior deltoid',
    ],
    videoUrl: ['https://www.youtube.com/embed/QCPKqM1zjHY'],
  },
  {
    exerciseName: 'Cable Flyes',
    category: 'chest',
    url: 'cable-flyes',
    muscle1: ['pectoralis major', 'anterior deltoid'],
    videoUrl: ['https://www.youtube.com/embed/vM1Ovmiu71M'],
  },
  // Back exercises
  {
    exerciseName: 'Pull-Ups (Wide Grip)',
    category: 'back',
    url: 'pull-ups-wide-grip',
    muscle1: ['latissimus dorsi', 'trapezius', 'rhomboids', 'biceps brachii'],
    videoUrl: [
      'https://www.youtube.com/embed/UvW6XnClK7A',
      'https://www.youtube.com/embed/YYbqPzlwY6c',
    ],
  },
  {
    exerciseName: 'Bent Over Barbell Rows',
    category: 'back',
    url: 'bent-over-barbell-rows',
    muscle1: ['latissimus dorsi', 'trapezius', 'rhomboids'],
    muscle2: [
      'pectoralis major clavicular part (upper)',
      'brachialis',
      'anterior deltoid',
    ],
    videoUrl: [
      'https://www.youtube.com/embed/MOlDmANU_4U',
      'https://www.youtube.com/embed/d6MZDg35qzc',
    ],
  },
  {
    exerciseName: 'Dumbbell Rows (Supported on Bench)',
    category: 'back',
    url: 'dumbbell-rows-supported-on-bench',
    muscle1: [
      'latissimus dorsi',
      'trapezius',
      'rhomboids',
      'posterior deltoid',
      'biceps brachii',
    ],
    videoUrl: ['https://www.youtube.com/embed/YAEBKTpH2lw'],
  },
  // Quadriceps/Hamstrings exercises
  {
    exerciseName: 'Dumbbell Lunges',
    category: 'quadriceps',
    url: 'dumbbell-lunges',
    muscle1: ['quadriceps', 'hamstrings', 'gluteus maximus'],
    videoUrl: ['https://www.youtube.com/embed/M4THUsShZFA'],
  },
  {
    exerciseName: 'Back Squats',
    category: 'quadriceps',
    url: 'back-squats',
    muscle1: ['quadriceps'],
    muscle2: ['hamstrings', 'gluteus maximus'],
    videoUrl: ['https://www.youtube.com/embed/aX7aE0meWcY'],
  },
  {
    exerciseName: 'Front Squats',
    category: 'quadriceps',
    url: 'front-squats',
    muscle1: ['quadriceps'],
    muscle2: ['hamstrings', 'gluteus maximus'],
    videoUrl: ['https://www.youtube.com/embed/gOsd8NNPg04'],
  },
  // Glutes/Hamstrings exercises
  {
    exerciseName: 'Deadlift',
    category: 'hamstrings-glutes',
    url: 'deadlift',
    muscle1: [
      'gluteus maximus',
      'hamstrings',
      'quadriceps',
      'erector spinae',
      'lumbar trapezius',
      'rhomboids',
    ],
    videoUrl: [
      'https://www.youtube.com/embed/eMhIdSrCaqU',
      'https://www.youtube.com/embed/0_igODjLiXM',
    ],
  },
  {
    exerciseName: 'Hip Thrusts',
    category: 'hamstrings-glutes',
    url: 'hip-thrusts',
    muscle1: ['gluteus maximus', 'hamstrings', 'quadriceps'],
    videoUrl: [
      'https://www.youtube.com/embed/ezEQkeQWMPM',
      'https://www.youtube.com/embed/zj6IrdvL9Ps',
    ],
  },
  {
    exerciseName: 'Leg Abduction on Machine',
    category: 'hamstrings-glutes',
    url: 'leg-abduction-on-machine',
    muscle1: [
      'gluteus maximus',
      'iliotibial tract',
      'tensor fasciae latae',
      'adductors',
    ],
    videoUrl: ['https://www.youtube.com/embed/IydaB14rnlg'],
  },
  // Shoulders exercises
  {
    exerciseName: 'Barbell Overhead Press',
    category: 'shoulders',
    url: 'barbell-overhead-press',
    muscle1: ['anterior deltoid'],
    muscle2: ['pectoralis major clavicular part (upper)', 'subscapularis'],
    videoUrl: [
      'https://www.youtube.com/embed/utGTzZRrwm0',
      'https://www.youtube.com/embed/CHWdd9-6Vfw',
    ],
  },
  {
    exerciseName: 'Seated Dumbbell Press',
    category: 'shoulders',
    url: 'seated-dumbbell-press',
    muscle1: ['middle deltoid'],
    muscle2: ['triceps brachii', 'trapezius'],
    videoUrl: ['https://www.youtube.com/embed/pInYJYisaEo'],
  },
  {
    exerciseName: 'Lateral Raises with Dumbbells',
    category: 'shoulders',
    url: 'lateral-raises-with-dumbbells',
    muscle1: ['middle deltoid', 'pectoralis major sternal part (middle)'],
    muscle2: ['trapezius'],
    videoUrl: ['https://www.youtube.com/embed/5g5U2dIoeQ0'],
  },
  {
    exerciseName: 'Face Pulls',
    category: 'shoulders',
    url: 'face-pulls',
    muscle1: ['posterior deltoid', 'infraspinatus', 'teres minor', 'trapezius'],
    videoUrl: [
      'https://www.youtube.com/embed/foz3Le39glE',
      'https://www.youtube.com/embed/51AuMQzpBVY',
    ],
  },
  {
    exerciseName: 'Alternating Front Raises with Dumbbells',
    category: 'shoulders',
    url: 'alternating-front-raises-with-dumbbells',
    muscle1: ['anterior deltoid'],
    muscle2: ['pectoralis major clavicular part (upper)'],
    videoUrl: ['https://www.youtube.com/embed/0ZslV4JJkIg'],
  },
  // Abdominal exercises
  {
    exerciseName: 'Hanging Knee Raises',
    category: 'abs',
    url: 'hanging-knee-raises',
    muscle1: ['rectus abdominis', 'iliopsoas', 'quadriceps'],
    videoUrl: ['https://www.youtube.com/embed/u1OJQFS3Irw'],
  },
  {
    exerciseName: 'Plank',
    category: 'abs',
    url: 'plank',
    time: true,
    muscle1: [
      'rectus abdominis',
      'obliques',
      'core',
      'shoulders',
      'back',
      'glutes',
      'quadriceps',
    ],
    videoUrl: ['https://www.youtube.com/embed/y1hXARQhHZM'],
  },
  {
    exerciseName: 'Cable Crunches',
    category: 'abs',
    url: 'cable-crunches',
    muscle1: ['rectus abdominis', 'rectus sheath'],
    videoUrl: ['https://www.youtube.com/embed/yTTuVSKU-Ks'],
  },
  {
    exerciseName: 'Russian Twists',
    category: 'abs',
    url: 'russian-twists',
    muscle1: ['rectus abdominis', 'obliques'],
    videoUrl: ['https://www.youtube.com/embed/rwnb6DGyxQA'],
  },
  // Biceps exercises
  {
    exerciseName: 'Cable Preacher Curls',
    category: 'biceps',
    url: 'cable-preacher-curls',
    muscle1: ['biceps brachii', 'brachialis'],
    videoUrl: ['https://www.youtube.com/embed/QkK9UjGI4Pw'],
  },
  {
    exerciseName: 'Hammer Curls with Dumbbells',
    category: 'biceps',
    url: 'hammer-curls-with-dumbbells',
    muscle1: ['brachioradialis', 'biceps brachii'],
    videoUrl: ['https://www.youtube.com/embed/s_ubLsRZ59I'],
  },
  {
    exerciseName: 'Standing Barbell Curls',
    category: 'biceps',
    url: 'standing-barbell-curls',
    muscle1: ['biceps brachii', 'brachialis'],
    videoUrl: ['https://www.youtube.com/embed/wHbgdQ5rS7g'],
  },
  {
    exerciseName: 'Standing Alternating Dumbbell Curls with Cable',
    category: 'biceps',
    url: 'standing-alternating-dumbbell-curls-with-cable',
    muscle1: ['biceps brachii', 'brachialis'],
    videoUrl: ['https://www.youtube.com/embed/XlvPT0mfQO8'],
  },
  // Triceps exercises
  {
    exerciseName: 'Dips (Triceps Version)',
    category: 'triceps',
    url: 'dips-triceps-version',
    muscle1: ['triceps brachii'],
    muscle2: ['brachialis'],
    videoUrl: ['https://www.youtube.com/embed/hiAvKCpOWdg'],
  },
  {
    exerciseName: 'Tricep Pushdowns with Straight Bar',
    category: 'triceps',
    url: 'tricep-pushdowns-with-straight-bar',
    muscle1: ['triceps brachii', 'brachialis'],
    videoUrl: ['https://www.youtube.com/embed/WBwvIlLTm00'],
  },
  {
    exerciseName: 'Lying Tricep Extensions on Flat Bench',
    category: 'triceps',
    url: 'lying-tricep-extensions-on-flat-bench',
    muscle1: ['triceps brachii'],
    videoUrl: ['https://www.youtube.com/embed/TJkoGDIdRYk'],
  },
  {
    exerciseName: 'Overhead Tricep Extensions with Dumbbell',
    category: 'triceps',
    url: 'overhead-tricep-extensions-with-dumbbell',
    muscle1: ['triceps brachii'],
    videoUrl: ['https://www.youtube.com/embed/mJf7Q8_nJMk'],
  },
];

export default exercises;
