export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).send('Method Not Allowed');
  }
  try {
    const body = typeof req.body === 'string'
      ? JSON.parse(req.body || '{}')
      : (req.body || {});

    // TODO: replace with your persistence or email logic
    console.log('Feedback', body);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Feedback error', err);
    return res.status(400).send('Bad Request');
  }
}
