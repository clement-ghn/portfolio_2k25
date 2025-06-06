import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Le Frenchman';

export const description =
    'Ce site retrace mon expérience du triathlon distance Ironman – Le Frenchman. De la préparation physique et mentale aux moments clés de la course, voici les étapes principales de mon parcours.'
    
export const links: Array<{ platform: Platform; link: string }> = [
    { 
        platform: Platform.Strava, 
        link: 'https://github.com/clement-ghn' 
    },
    {
        platform: Platform.Instagram,
        link: 'https://www.instagram.com/clement_ghn/'
    },
    {
        platform: Platform.Twitter,
        link: 'https://x.com/clement_ghn'
    },
    {
        platform: Platform.Email,
        link: 'ent.clementgehin@gmail.com'
    }
];

export const sports = getSkills('natation', 'velo', 'cap');
