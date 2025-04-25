import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Languages', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:'',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:'',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:'',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:'',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description:'',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'react',
		color: 'cyan',
		description:'',
		logo: Assets.ReactJs,
		name: 'React',
		category: 'library'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'angular',
		color: 'red',
		description: '',
		logo: Assets.Angular,
		name: 'Angular',
		category: 'framework'
	}),
	defineSkill({
		slug: 'ruby',
		color: 'red',
		description: '',
		logo: Assets.Ruby,
		name: 'Ruby',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'rails',
		color: 'red',
		description: '',
		logo: Assets.RoR,
		name: 'Ruby on Rails',
		category: 'framework'
	}),
	defineSkill({
		slug: 'jquery',
		color: 'cyan',
		description: '',
		logo: Assets.Jquery,
		name: 'Jquery',
		category: 'library'
	}),
	defineSkill({
		slug: 'shopify',
		color: 'green',
		description: '',
		logo: Assets.Shopify,
		name: 'Shopify',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'jest',
		color: 'red',
		description: '',
		logo: Assets.Jest,
		name: 'Jest',
		category: 'test'
	}),
	defineSkill({
		slug: 'vite',
		color: 'orange',
		description: '',
		logo: Assets.Vite,
		name: 'Vite',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description: '',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'git',
		color: 'orange',
		description: '',
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'comptabilite',
		color: 'black',
		description: '',
		logo: Assets.Compta,
		name: 'Comptabilité',
		category: 'soft'
	}),
	defineSkill({
		slug: 'gdp',
		color: 'blue',
		description: '',
		logo: Assets.GestiondeProjet,
		name: 'Gestion de Projet',
		category: 'soft'
	}),
	defineSkill({
		slug: 'java',
		color: 'white',
		description: '',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'c',
		color: 'blue',
		description: '',
		logo: Assets.C,
		name: 'C',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'csharpe',
		color: 'purple',
		description: '',
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'androidstudio',
		color: 'blue',
		description: '',
		logo: Assets.AndroidStudio,
		name: 'Android Studio',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'python',
		color: 'yellow',
		description: '',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'numpy',
		color: 'cyan',
		description: '',
		logo: Assets.Numpy,
		name: 'Numpy',
		category: 'library'
	}),
	defineSkill({
		slug: 'pandas',
		color: 'white',
		description: '',
		logo: Assets.Pandas,
		name: 'Pandas',
		category: 'library'
	}),
	defineSkill({
		slug: 'flask',
		color: 'black',
		description: '',
		logo: Assets.Flask,
		name: 'Flask',
		category: 'framework'
	}),
	defineSkill({
		slug: 'tkinter',
		color: 'blue',
		description: '',
		logo: Assets.TKinter,
		name: 'Tkinter',
		category: 'library'
	}),
	defineSkill({
		slug: 'aws',
		color: 'orange',
		description: '',
		logo: Assets.AWS,
		name: 'AWS',
		category: 'devops'
	}),

	defineSkill({
		slug: 'matlab',
		color: 'blue',
		description: '',
		logo: Assets.Matlab,
		name: 'Matlab',
		category: 'pro-lang'
	}),

	defineSkill({
		slug: 'spring',
		color: 'green',
		description: '',
		logo: Assets.Spring,
		name: 'Spring',
		category: 'framework'
	}),

] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
