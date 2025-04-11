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
		period: { from: new Date(2022, 8, 1), to: new Date(2025, 7, 30) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithmes', 'Python', 'Android Studio', 'Java', 'Anglais', 'Droit', 'Comptabilité', 'Matlab', 'Preuves de programmation', 'Réseaux', 'Gestion de projet', 'Bases de données NOSQL']
	},
	{
		degree: 'Semestre d\'échange au Cegep de Matane',
		description: '',
		location: 'Matane, Québec, Canada',
		logo: Assets.CegepMatane,
		name: '',
		organization: 'Cegep de Matane',
		period: { from: new Date(2022, 0, 20), to: new Date(2022, 5, 20) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Unity', 'C++', 'Python', 'Cybersécurité', 'Electron', 'Javascript', 'VR', 'Android Studio', 'AWS']
	},
	{
		degree: 'DUT Informatique',
		description: '',
		location: 'Saint-Dié-des-Vosges, Grand Est, France',
		logo: Assets.IUT,
		name: '',
		organization: 'Université de Lorraine',
		period: { from: new Date(2020, 8, 1), to: new Date(2022, 7, 30) },
		shortDescription: '',
		slug: 'dummy-education-item-3',
		subjects: ['Assembleur', 'C', 'Python', 'POO', 'Algorithmes et Structures de données', 'Java', 'Anglais', 'Réseaux', 'Gestion de projet', 'Bases de données SQL']
	}
];

export const title = 'Formation';
