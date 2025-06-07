import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';

const access_token = env.STRAVA_ACCESS_TOKEN;

const afterDate = new Date(Date.UTC(2024, 8, 1));   // 1er septembre 2024
const beforeDate = new Date(Date.UTC(2025, 5, 1));  // 1er juin 2025

const after = Math.floor(afterDate.getTime() / 1000);
const before = Math.floor(beforeDate.getTime() / 1000);

export async function GET() {
	const perPage = 200;
	let page = 1;
	let allActivities = [];
	let fetched = [];

	do {
		const url = `https://www.strava.com/api/v3/athlete/activities?per_page=${perPage}&page=${page}&after=${after}&before=${before}`;

		const res = await fetch(url, {
			headers: {
				Authorization: `Bearer ${access_token}`
			}
		});

		if (!res.ok) {
			return json({ error: true, status: res.status }, { status: res.status });
		}

		fetched = await res.json();
		allActivities.push(...fetched);
		page++;
	} while (fetched.length === perPage); // continue tant que Strava envoie une page complète

	return json(allActivities);
}
