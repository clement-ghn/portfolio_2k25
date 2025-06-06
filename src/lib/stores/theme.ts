import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { goto } from '$app/navigation';

const key = '@riadh-adrani-theme';

const updateLocalStorage = (value: boolean) => {
	if (browser) {
		localStorage.setItem(key, JSON.stringify(value));
	}
};

export const theme = writable<boolean>(false);

export const toggleTheme = (value?: boolean) =>
	theme.update((it) => {
		const $v = typeof value === 'boolean' ? value : !it;

		updateLocalStorage($v);

		document.querySelector(':root')?.setAttribute('data-theme', $v ? 'dark' : 'light');

		if (browser) {
			if ($v) {
				goto('/'); // Portfolio
			} else {
				goto('/ironman'); // Ironman journey
			}
		}

		return $v;
	});

export const onHydrated = () => {
	const fromStore = localStorage.getItem(key);

	if (!fromStore) {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			// dark mode
			toggleTheme(true);
		}
		else {
			// light mode
			toggleTheme(false);
		}
	} else {
		toggleTheme(JSON.parse(fromStore));
	}
};
