class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;

    }
    printPersonData() {
        console.log(`${this.name}, ${this.surname}`)
    }
}
class Programmer extends Person {
    constructor(name, surname, languages) {
        super(name, surname);
        this.language = languages;
    }
    printProgrammerData() {
        super.printPersonData()
        console.log(`${this.language}`);
    }
}
const marko = new Programmer('marko', 'markovic', 'javascript,php');
marko.printProgrammerData();
const pera = new Programmer('pera', 'peric', 'html,css,C++');
pera.printProgrammerData();





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
        console.log(this.name, this.surname, this.salary);
    }
    getSalary() {
        console.log(this.salary);
    }
    incereaseSalary(newSalary) {
        newSalary = this.salary * 1.1;
    }
}
class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;

    }
    getspecialization() {
        console.log(this.specialization);
    }
}
class Manager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary);
        this.department = department;
    }
    getDepartment() {
        console.log(this.department)
    }
    changeDepartment(newDepartment) {
        this.department = newDepartment;

    }
}

const Maja = new Manager('Maja', 'Nikolic', 'manager', '1000', 'HR');
const Zoca = new Developer('Zoran', 'Stevanovic', 'satro_developer', '2200', 'brzo ispijanje piva');

Maja.getDepartment();
Maja.changeDepartment('prodaja');
Maja.getDepartment();


