# from your repo root
mkdir -p api
cat > api/feedback.js <<'JS'
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).send('Method Not Allowed');
  }
  try {
    const body = typeof req.body === 'string'
      ? JSON.parse(req.body || '{}')
      : (req.body || {});

    console.log('Feedback', body);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Feedback error', err);
    return res.status(400).send('Bad Request');
  }
}
JS

# update your fetch URL
sed -i.bak "s#/.netlify/functions/feedback#/api/feedback#g" js/features/feedback.js

git add api/feedback.js js/features/feedback.js
git commit -m "feat: add /api/feedback and update client endpoint"
git push
