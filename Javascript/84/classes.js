class Person{
    #firstName;
    #lastName;
    #age;
    constructor(firstName, lastName, age){
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#age = age;
    }
    toString(){
        return `first: ${this.#firstName} last: ${this.#lastName} age: ${this.#age}`;
    }
}
const chayala = new Person('Chayala', 'Stern', 100);
console.log(chayala.toString());
class Student extends Person{
    #grade;
    constructor(firstName, lastName, age, grade){
        super(firstName, lastName, age);
        this.#grade = grade;
    }
    toString(){
       return `${super.toString()} grade: ${this.#grade}`;
    }
}
const shira = new Student('Shira', 'Shachar', 120, 100);
console.log(shira.toString());
