import { getApisData } from '../controllers/apiController.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return getApisData(req, res);
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}