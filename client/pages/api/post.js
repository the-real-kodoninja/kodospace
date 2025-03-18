import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
  const client = await pool.connect();

  try {
    switch (req.method) {
      case 'POST':
        const { content } = req.body;
        const insertQuery = 'INSERT INTO posts (content) VALUES ($1) RETURNING *';
        const insertResult = await client.query(insertQuery, [content]);
        res.status(201).json(insertResult.rows[0]);
        break;
      case 'GET':
        const selectQuery = 'SELECT * FROM posts';
        const selectResult = await client.query(selectQuery);
        res.status(200).json(selectResult.rows);
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        break;
    }
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    client.release();
  }
}