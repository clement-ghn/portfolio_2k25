import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';

const client_id = '163413';
const client_secret = '5c087bb04dca7d88711d8a561a1288f256f4092d';


export async function POST({ request }: RequestEvent) {
	const { code } = await request.json();

	const res = await fetch('https://www.strava.com/oauth/token', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			client_id,
			client_secret,
			code,
			grant_type: 'authorization_code'
		})
	});

	if (!res.ok) {
		return json({ error: true }, { status: res.status });
	}

	const data = await res.json();
	return json(data);
}
