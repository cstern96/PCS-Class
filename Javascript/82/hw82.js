const vehicleFunctions = {
    go(speed) {
        this.speed = speed;
        console.log(`Now going at speed ${this.speed}`);
    },
    print() {
        console.log(`I am ${this.color} and going at ${this.speed} mph`);
      },
  };
function Vehicle(color) {
    this.color = color;
    this.speed = 0;
}
Object.assign(Vehicle.prototype, vehicleFunctions);


function Plane(color){
Vehicle.call(this, color);
}
Plane.prototype = Object.create(Vehicle.prototype);
Plane.prototype.go = function(speed) {
    this.speed = speed;
    console.log(`Now flying at speed ${this.speed}`);
};

const bmw = new Vehicle('yellow');
bmw.go(50);
bmw.print();

const boeing = new Plane('blue');
boeing.go(300);
boeing.print();