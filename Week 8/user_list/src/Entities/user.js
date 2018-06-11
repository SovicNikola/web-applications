

export default class User {
    constructor(name, surname, email, dob, picture, gender) {
        let nameFirstLetter = name.charAt(0).toUpperCase()
        this.name = nameFirstLetter + name.slice(1);
        let surnameFirstLetter = surname.charAt(0).toUpperCase()
        this.surname = surnameFirstLetter + surname.slice(1)
        this.email = email;
        this.dob = dob;
        this.largeImage = picture.large;
        this.medium = picture.medium;
        this.gender = gender
    }

}

