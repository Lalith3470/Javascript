// class Car {
//     constructor(name,year){
//         this.name = name;
//         this.year = year;
//     }
// }
// const car1 = new Car("Audi", 2023);
// const car2 = new Car("mustang",1969);

// console.log(car1.name,car1.year);
// console.log(car2.name,car2.year);


class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}
const cat = new Animal("Cat", "Meow");
cat.makeSound();