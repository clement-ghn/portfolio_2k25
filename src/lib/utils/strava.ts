
async function loadTokens() {
  return {
    access_token: '9ed48d1c30dd5f91ec23644f025063fb5720f177',
    refresh_token: '6d2d27d7ae2070ca13892902cc18710e1005f2d6',
    expires_at: 1696600000 // timestamp Unix
  };
}

export async function saveTokens(access_token: string, refresh_token: string, expires_at: number) {
  // Exemple : sauvegarder dans DB, fichier, mémoire, ...
}

export async function getValidAccessToken() {
  let { access_token, refresh_token, expires_at } = await loadTokens();

  const now = Math.floor(Date.now() / 1000);
  if (expires_at < now) {
    const res = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: '163413',
        client_secret: '5c087bb04dca7d88711d8a561a1288f256f4092d',
        grant_type: 'refresh_token',
        refresh_token
      })
    });

    if (!res.ok) throw new Error('Impossible de rafraîchir le token');

    const data = await res.json();
    await saveTokens(data.access_token, data.refresh_token, data.expires_at);
    access_token = data.access_token;
  }

  return access_token;
}
