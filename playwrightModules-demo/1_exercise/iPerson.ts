interface IPerson {
    name: string;
    age: number;
    email: string
}

export class Person implements IPerson {
    name: string;
    age: number;
    email: string;

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    sayHello() {
        console.log(`Hello ${this.name}`)
    }
}

const myself: Person = new Person("Me", 99, "email@email.com");
myself.sayHello();
