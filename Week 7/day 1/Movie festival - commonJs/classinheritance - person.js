
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;

    }
    printPersonData() {
        console.log(`${this.name} , ${this.surname}`);
    }
}

class Programmer extends Person {
    constructor(name, surname, languages) {
        super(name, surname);
        this.languages = languages;
    }
    printProgrammerData() {
        super.printPersonData();
        console.log(`${this.languages}`);

    }
    learnedNewLanguage(language) {
        this.languages.push(language);
    }
}

let mika = new Programmer('Mika', 'Mikic', ['JS', 'C#', 'C++', "PHP"]);
mika.printProgrammerData();
mika.learnedNewLanguage('HTml');
mika.printProgrammerData();
mika.printPersonData();