function multiply(num1: number, num2: number) {
  return num1 * num2;
}
let sum = multiply(5, 5);
console.log(sum);

interface Car {
  model: string;
  color: string;
}

function buyCar(car: Car): string {
  return `Your car is of model ${car.model} and it's color is ${car.color} `;
}

const car: Car = {model: 'honda', color: 'grey'};
console.log(buyCar(car));

class House {
  constructor(public address: string, private rooms: number) {};
}

const myHouse = new House('329 Eastwod Rd.', 5);
console.log(myHouse);

