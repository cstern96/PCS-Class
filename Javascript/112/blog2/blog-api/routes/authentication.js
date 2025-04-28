import express from 'express';
import bcrypt from 'bcrypt';

const router = express.Router();

router.use((req, res, next) => {
  req.users = req.database.collection('users');
  next();
});

router.post('/login', async (req, res, next) => {
  
  try {
    console.log('Login route hit');
    const user = await req.users.findOne({username: req.body.username});

    if (!user) {
      const error = new Error('Bad username or password');
      error.statusCode = 401;
      throw error;
    }

    console.log(user);

    if (!await bcrypt.compare(req.body.password, user.password)) {
      const error = new Error('Bad username or password');
      error.statusCode = 401;
      throw error;
    }

    req.session.username = req.body.username;

    return res.status(200).send('Login successful');
  } catch (e) {
    next(e);
  }
});

router.post('/register', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      const error = new Error('Username and password are required');
      error.statusCode = 401;
    }

    const hash = await bcrypt.hash(password, 10);

    const results = await req.users.insertOne({
      username: req.body.username,
      password: hash
    });

    console.log(results);

    res.statusCode = 201;
    res.end();
  } catch (e) {
    console.log(e);

    /*if (e.errno === 1062) {
      return next(/*new Error(* /`${username} is already taken. Please try a different one.`/*)* /);
    }*/

    next(e);
  }
  next();
});

router.get('/logout', (req, res, next) => {
  req.session.destroy();
  return res.status(302).send('logout successful');
});

export default router;
