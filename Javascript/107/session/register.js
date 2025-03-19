const pool = require('./pool.js');

module.exports = async (req, res, next) => {
  try{
    const { username, password } = req.body;
    const [results] = await pool.execute(
      'INSERT INTO users (username, password) VALUES (?,?)', [username, password]
    );
    console.log(results);
    res.redirect('/');
  } catch(err){
    next(err);
  }
  res.end();
};
