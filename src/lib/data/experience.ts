import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'FullStack-Developer',
		company: '4Murs',
		description: 'Alternance en tant que développeur FullStack Ruby on Rails.',
		contract: ContractType.Alternance,
		type: 'FullStack Development',
		location: 'Marly, Grand Est, France',
		period: { from: new Date(2022, 9, 1), to: new Date(2025, 8, 30) },
		skills: getSkills('ruby', 'rails', 'js', 'html', 'css'),
		name: 'Alternant Développeur FullStack',
		color: 'blue',
		links: [],
		logo: Assets.QMurs,
		shortDescription: 'Alternance en tant que développeur FullStack Ruby on Rails.'
	},
	{
		slug: 'Stage Développeur Frontend',
		company: 'Crowdkeep',
		description: 'Stage en développement Frontend React',
		contract: ContractType.Internship,
		type: 'Frontend Development',
		location: 'Lisbonne, Portugal',
		period: { from: new Date(2024, 6, 1), to: new Date(2024, 8, 30) },
		skills: getSkills('react', 'js', 'html', 'css'),
		name: 'Stage Développeur Frontend',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Stage en développement Frontend React'
	},
	{
		slug: 'Stage Développeur Frontend',
		company: '8P-Design',
		description: 'Refonte du style de l\'outil interne de l\'entreprise.',
		contract: ContractType.Internship,
		type: 'Frontend Development',
		location: 'Montréal, Québec, Canada',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 6, 20) },
		skills: getSkills('jquery', 'html', 'css', 'Shopify', 'php'),
		name: 'Stage Développeur Frontend',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Refonte du style de l\'outil interne de l\'entreprise.'
	}
];

export const title = 'Experience';
