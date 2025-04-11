import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: '4Murs',
		company: '4Murs',
		description: 'Alternance en tant que développeur FullStack Ruby on Rails.',
		contract: ContractType.Alternance,
		type: 'FullStack Development',
		location: 'Marly, Grand Est, France',
		period: { from: new Date(2022, 8, 1), to: new Date(2025, 7, 30) },
		skills: getSkills('ruby', 'rails', 'js', 'html', 'css', 'gdp', 'docker'),
		name: 'Alternant Développeur FullStack',
		color: 'white',
		links: [],
		logo: Assets.QMurs,
		shortDescription: 'Alternance en tant que développeur FullStack Ruby on Rails.'
	},
	{
		slug: 'Crowdkeep',
		company: 'Crowdkeep',
		description: 'Stage en développement Frontend React',
		contract: ContractType.Internship,
		type: 'Frontend Development',
		location: 'Lisbonne, Portugal',
		period: { from: new Date(2024, 5, 1), to: new Date(2024, 7, 30) },
		skills: getSkills('react', 'html', 'js', 'css', 'jest', 'vite'),
		name: 'Stage Développeur Frontend',
		color: 'blue',
		links: [],
		logo: Assets.Crowdkeep,
		shortDescription: 'Stage en développement Frontend React'
	},
	{
		slug: '8P-Design',
		company: '8P-Design',
		description: 'Refonte du style de l\'outil interne de l\'entreprise.',
		contract: ContractType.Internship,
		type: 'Frontend Development',
		location: 'Montréal, Québec, Canada',
		period: { from: new Date(2022, 3, 1), to: new Date(2022, 5, 20) },
		skills: getSkills('jquery', 'html', 'css', 'shopify'),
		name: 'Stage Développeur Frontend',
		color: 'green',
		links: [],
		logo: Assets.PDesign,
		shortDescription: 'Refonte du style de l\'outil interne de l\'entreprise.'
	}
];

export const title = 'Experience';
