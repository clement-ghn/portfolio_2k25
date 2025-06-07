import { json } from '@sveltejs/kit';

const access_token = 'a4a1ec17f4edf9f69caef9b34efe2390ae2b3bee';

const afterDate = new Date(Date.UTC(2024, 8, 1));   // 1er septembre 2024 (mois 8 = septembre)
const beforeDate = new Date(Date.UTC(2025, 5, 1));  // 1er juin 2025 (mois 5 = juin)

// Convertir en timestamps UNIX en secondes
const after = Math.floor(afterDate.getTime() / 1000);
const before = Math.floor(beforeDate.getTime() / 1000);

export async function GET() {
	const url = `https://www.strava.com/api/v3/athlete/activities?per_page=50&after=${after}&before=${before}`;

	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${access_token}`
		}
	});

	if (!res.ok) {
		return json({ error: true, status: res.status }, { status: res.status });
	}

	const data = await res.json();
	return json(data);
}
