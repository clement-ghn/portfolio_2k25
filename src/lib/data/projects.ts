import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'portfolio-svelte',
		color: '#ff3e00',
		description:
			'Un portfolio avec Typescript et SvelteKit permettant de découvrir le framework Svelte et ses fonctionnalités.',
		shortDescription:
			'Un portfolio avec Typescript et SvelteKit permettant de découvrir le framework Svelte et ses fonctionnalités.',
		links: [{ to: 'https://github.com/clement-ghn/portfolio_2k25', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Portfolio 2025',
		period: {
			from: new Date(2025, 3, 15),
			to: new Date(2025, 4, 15)
		},
		skills: getSkills('svelte', 'ts', 'sass'),
		type: 'Website Template',
		screenshots: []
	},

	{
		slug: 'club-de-plage-royan',
		color: '#fff480',
		description:
			'Un site vitrine pour les clubs de plage à Royan, avec une interface utilisateur intuitive et un système de gestion des réservations.',
		shortDescription:
			'Un site vitrine pour les clubs de plage à Royan, avec une interface utilisateur intuitive et un système de gestion des réservations.',
		links: [{ to: 'https://github.com/clement-ghn/siteRoyan', label: 'GitHub' }],
		logo: Assets.Royan,
		name: 'Clubs de plage Royan',
		period: {
			from: new Date(2023, 5, 15),
			to: new Date()
		},
		skills: getSkills('angular', 'ts', 'css', 'html'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'Accueil',
				src: '/projets/R1.png'
			},
			{
				label: 'Clubs',
				src: '/projets/R2.png'
			},
			{
				label: 'Inscription',
				src: '/projets/R3.png'
			},
			{
				label: 'Connexion',
				src: '/projets/R4.png'
			},
		]
	},

	{
		slug: 'tereva-loisirs',
		color: '#f0bdff',
		description:
			'Un site vitrine pour Tereva Loisirs, une entreprise de location d\'hébergements, avec un design moderne et une interface utilisateur intuitive.',
		shortDescription:
			'Un site vitrine pour Tereva Loisirs, une entreprise de location d\'hébergements, avec un design moderne et une interface utilisateur intuitive.',
		links: [{ to: 'https://github.com/clement-ghn/TerevaLoisirs', label: 'GitHub' }],
		logo: Assets.Tereva,
		name: 'Tereva Loisirs',
		period: {
			from: new Date(2023, 8, 15),
			to: new Date()
		},
		skills: getSkills('angular', 'ts', 'css', 'html', 'flask', 'python', 'sqlite'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'Accueil',
				src: '/projets/TL1.png'
			},
			{
				label: 'Hébergements',
				src: '/projets/TL2.png'
			},
			{
				label: 'Hébergements',
				src: '/projets/TL3.png'
			},
			{
				label: 'Carrière',
				src: '/projets/TL4.png'
			},
			{
				label: 'Connexion',
				src: '/projets/TL5.png'
			}
		]
	}
];

export const title = 'Projects';
