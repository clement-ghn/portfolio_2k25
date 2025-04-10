import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Diplôme d’ingénieur en alternance',
		description: '',
		location: 'Nancy, Grand Est, France',
		logo: Assets.TelecomNancy,
		name: '',
		organization: 'Telecom Nancy',
		period: { from: new Date(2022, 9, 1), to: new Date(2025, 8, 30) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	},
	{
		degree: 'Semestre d\'échange au Cegep de Matane',
		description: '',
		location: 'Matane, Québec, Canada',
		logo: Assets.CegepMatane,
		name: '',
		organization: 'Cegep de Matane',
		period: { from: new Date(2022, 1, 20), to: new Date(2022, 6, 20) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Assembly', 'C', 'Python', 'Algorithms and Data structures']
	},
	{
		degree: 'DUT Informatique',
		description: '',
		location: 'Saint-Dié-des-Vosges, Grand Est, France',
		logo: Assets.IUT,
		name: '',
		organization: 'Université de Lorraine',
		period: { from: new Date(2020, 9, 1), to: new Date(2022, 8, 30) },
		shortDescription: '',
		slug: 'dummy-education-item-3',
		subjects: ['Assembly', 'C', 'Python', 'Algorithms and Data structures']
	}
];

export const title = 'Education';
