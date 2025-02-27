import express from 'express';
const router = express.Router();
import pool from '../pool.js';
//import debugLib from 'debug';
//const debug = debugLib('contacts:api');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
      const [results] = await pool.execute(
        'SELECT * FROM contacts'
      );

      res.send(results);

    } catch (err) {
      next(err);
    }
});
router.get('/:id', async (req, res, next) => {
  try{
    const[results] = await pool.execute(
        'SELECT * FROM contacts WHERE id = ?', [req.params.id]
    );
    if(results.length === 0){
      return res.status(400).send('Contact not found');
    }

    res.send(results);

  } catch(err) {
    next(err);
  }
});

export default router;
