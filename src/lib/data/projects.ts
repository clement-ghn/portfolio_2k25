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
	},

	{
		slug: 'modele-sim',
		color: '#e9e9e9',
		description:
			'Simulation de modèle SIR : un outil pour visualiser les épidémies. Un projet de simulation de modèle SIR pour visualiser la propagation des épidémies.',
		shortDescription:
			'Simulation de modèle SIR : un outil pour visualiser les épidémies. Un projet de simulation de modèle SIR pour visualiser la propagation des épidémies.',
		links: [{ to: 'https://github.com/clement-ghn/m3202-SIR-sim', label: 'GitHub' }],
		logo: Assets.Java,
		name: 'Modèle SIR',
		period: {
			from: new Date(2021, 11, 15),
			to: new Date(2022, 3, 15)
		},
		skills: getSkills('java'),
		type: 'Java Application',
		screenshots: [
			{
				label: 'Modele SIR',
				src: '/projets/sim1.png'
			},
			{
				label: 'Modele SIR',
				src: '/projets/sim2.png'
			}
		]
	},

	{
		slug: 'keep-the-peach',
		color: '#e9be85',
		description:
			'Application d\'entrainements physique',
		shortDescription:
			'Application d\'entrainements physique',
		links: [{ to: 'https://github.com/cegepmatane/projet-specialise-2022-clement-ghn?tab=readme-ov-file', label: 'GitHub' }],
		logo: Assets.AndroidStudio,
		name: 'Keep the Peach',
		period: {
			from: new Date(2022, 1, 15),
			to: new Date(2022, 3, 1)
		},
		skills: getSkills('java', 'androidstudio', 'sqlite'),
		type: 'Android Application',
		screenshots: [
			{
				label: 'Accueil',
				src: '/projets/ktp1.png'
			},
			{
				label: 'Séances',
				src: '/projets/ktp2.png'
			},
			{
				label: 'Séances',
				src: '/projets/ktp3.png'
			}
		]
	},

	{
		slug: 'penndu-tkinter',
		color: '#e7e7e5',
		description:
			'Jeu de pendu en Tkinter : un jeu de pendu simple et amusant, développé avec Tkinter pour une interface graphique.',
		shortDescription:
			'Jeu de pendu en Tkinter',
		links: [{ to: 'https://github.com/clement-ghn/Jeu_du_pendu_python', label: 'GitHub' }],
		logo: Assets.TKinter,
		name: 'Jeu de pendu',
		period: {
			from: new Date(2020, 9, 15),
			to: new Date(2022, 3, 1)
		},
		skills: getSkills('python', 'tkinter'),
		type: 'Game',
		screenshots: [
			{
				label: 'Accueil',
				src: '/projets/pendu1.png'
			},
			{
				label: 'Début de la partie',
				src: '/projets/pendu2.png'
			},
			{
				label: 'Jeu en cours',
				src: '/projets/pendu3.png'
			},
			{
				label: 'Fin de la partie',
				src: '/projets/pendu4.png'
			}
		]
	},

	{
		slug: 'jeu-vr',
		color: '#9c9392',
		description:
			'Jeu de cache-cache en VR avec Unity : un jeu immersif de cache-cache en réalité virtuelle, développé avec Unity pour une expérience de jeu captivante.',
		shortDescription:
			'Jeu de cache-cache en VR avec Unity.',
		links: [{ to: 'https://github.com/BastianRapine/projet_VR', label: 'GitHub' }],
		logo: Assets.Unity,
		name: 'Jeu en VR',
		period: {
			from: new Date(2022, 0, 15),
			to: new Date(2022, 3, 1)
		},
		skills: getSkills('unity', 'C#', 'VR'),
		type: 'Game',
		screenshots: []
	},

	{
		slug: 'api-meteo',
		color: '#57bec9',
		description:
			'API météo : une API météo simple et efficace utilisant les services de OpenWeatherMap, développée avec Spring pour fournir des données météorologiques en temps réel.',
		shortDescription:
			'API météo',
		links: [],//{ to: 'https://github.com/BastianRapine/projet_VR', label: 'GitHub' }],
		logo: Assets.Spring,
		name: 'API météo',
		period: {
			from: new Date(2024, 10, 15),
			to: new Date(2025, 0, 10)
		},
		skills: getSkills('spring', 'java', 'angular'),
		type: 'API',
		screenshots: [
			{
				label: 'API météo',
				src: '/projets/meteo.png'
			}
		]
	},

	{
		slug: 'parta-jardin',
		color: '#078005',
		description:
			'Ce projet est un site qui va permettre à des personnes de partager leur jardin et les produits de celui ci avec les étudiants. Cela à pour but de rapprocher les deux générations, de réduire l\'isolement ainsi que de favoriser la nutrition des étudiants en situation précaire à moindre coût',
		shortDescription:
			'Réseau social pour partager les produits de son jardin',
		links: [{ to: 'https://github.com/Spl4shh/Parta-Jardin', label: 'GitHub' }],
		logo: Assets.Flask,
		name: 'Parta\'Jardin',
		period: {
			from: new Date(2022, 10, 15),
			to: new Date(2023, 0, 10)
		},
		skills: getSkills('sqlite', 'flask', 'python', 'html', 'css', 'js'),
		type: 'Website Template',
		screenshots: []
	}
];

export const title = 'Projects';
