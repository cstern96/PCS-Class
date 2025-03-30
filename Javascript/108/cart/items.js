const pool = require('./pool.js');

module.exports = async (req, res, next) => {
  try {
    const [results] = await pool.execute('SELECT id, name, price, description, category FROM items');

    if (!results.length) {
      throw new Error('Bad username or password');
    }

    console.log('in items', results);
    return results;

  } catch (e) {
    next(e);
  }
};
