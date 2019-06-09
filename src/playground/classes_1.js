class Person {
    constructor(name = 'Anon',age = 0) {
        this.name = name;
        this.age = age;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }

    getGreeting() {
        return `Hi,${this.name}`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age); // Access parent constructor
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += `Their major is ${this.major}.`;
        }
        return description;
    }
} 

const me = new Student('Aman',19, 'CS');
console.log(me.getDescription());
const he = new Student();
console.log(he);
