import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Gehin';

export const lastName = 'Clément';

export const description =
	'Ingénieur en informatique récemment diplômé, je me spécialise dans le développement fullstack avec une solide expérience en Ruby on Rails, React, et l’intégration d’APIs.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ 
		platform: Platform.GitHub, 
		link: 'https://github.com/clement-ghn' 
	},
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/cl%C3%A9ment-gehin-631199207/'
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

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
