class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }
    getData() {
        return `${this.name} ${this.surname}, ${this.salary}`
    }
    getSalary() {
        console.log(`${this.salary}`);
    }
    increaseSalary() {
        this.salary *= 1.1
    }
}

class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    }
    getSpecialization() {
        console.log(`${this.specialization}`);

    }
}

class Manager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary);
        this.department = department;
    }
    getDepartment() {
        console.log(`${this.department}`);
    }
    changeDepartment(department) {
        this.department = department;
    }
}

const pera = new Manager('Pera', 'Peric', 'CEO', 1750, 'IT');
const mika = new Manager('Mika', 'Mikic', 'dev', 750, 'JS');

mika.getSalary();
mika.increaseSalary();

console.log(mika.getData());


