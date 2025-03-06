import express from 'express';
const router = express.Router();
import pool from '../pool.js';
import debugLib from 'debug';
const debug = debugLib('recipes:api');

/* GET home page. */
router.route('/')
  .get(async (req, res, next) => {
    try {
      const [results] = await pool.execute(
        'SELECT id, name, ingredients, steps FROM recipes'
      );

      res.send(results);
    } catch (err) {
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const [results] = await pool.execute(
        'INSERT INTO recipes (name, ingredients, steps) VALUES (?, ?, ?)', [req.body.name, req.body.ingredients, req.body.steps]
      );

      console.log(results);
      req.body.id = results.insertId;
      res.status(201)
        .location(`/${results.insertId}`)
        .send(req.body);
    } catch (err) {
      next(err);
    }
  });
router.route('/:id')
  .get(async (req, res, next) => {
    debug(`getting recipe ${req.params.id}`);
    try {
      const [results] = await pool.execute(
        'SELECT id, name, ingredients, steps FROM recipes WHERE id = ?', [req.params.id]
      );

      if (!results.length) {
        return res.status(404)
          .send(`Unable to find contact ${req.params.id}`);
      }

      res.send(results[0]);
    } catch (err) {
      next(err);
    }
  });

router.put('/:id', async (req, res, next) => {
  try {
    const [results] = await pool.execute(
      'UPDATE recipes SET name = ?, ingredients = ?, steps = ? WHERE id = ?', [req.body.name, req.body.ingredients, req.body.steps, req.params.id]
    );

    if (!results.length) {
      return res.status(404)
        .send('Unable to find recipe ${req.params.id}');
    }
    res.send(results[0]);
  } catch (err) {
    next(err);
  }
});
router.delete('/:id', async (req, res, next) => {
  try {
    const [results] = await pool.execute(
      'DELETE FROM recipes WHERE id = ?', [req.params.id]
    );
    console.log(results);
    res.send('deleted');
  } catch (err) {
    next(err);
  }
});
router.use(function (err, req, res) {
  res.status(err.status || 500);
  res.send(err.message);
});


export default router;

