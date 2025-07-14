import Mercury from '@postlight/mercury-parser';

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const result = await Mercury.parse(url);
    return res.status(200).json({ content: result.content });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to parse the article.' });
  }
}
