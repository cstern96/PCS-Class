import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.end('Hello Express!');
});
app.param(['num1', 'num2'], (req, res, next) => {

  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send('Invalid input: Both parameters must be numbers.');
  }
  req.params.num1 = num1;
  req.params.num2 = num2;
  next();
});
app.get('/add/:num1/:num2', (req, res) => {
  const sum = req.params.num1 + req.params.num2;

  res.end(`The sum is ${sum}`);
});

app.get('/subtract/:num1/:num2', (req, res) => {
  const sum = req.params.num1 - req.params.num2;

  res.end(`The sum is ${sum}`);
});

app.get('/operation/:num1/:num2/:op', (req, res) => {
  let result;
  const num1 = req.params.num1;
  const num2 = req.params.num2;
  const op = req.params.op;

  switch (op) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 !== 0) {
        result = num1 / num2;
      }
      else {
        return res.status(400).send('Invalid input: The second parameter cannot be zero.');
      }
      break;
  }

  res.end(`The answer is ${result}`);
});

app.listen(80);