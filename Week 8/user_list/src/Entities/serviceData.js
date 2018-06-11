// import { usersData } from '../users/usersData'
import User from './user.js'

import axios from 'axios'
// import


class ServiceData {
    getData() {
        // return fetch('https://randomuser.me/api/?results=15').then((response) => {
        //     return response.json()
        // }).then((data) => {
        //     let array = data.results;
        //     return array.map((element) => {
        //         return new User(element.name.first, element.email, element.dob, element.picture)
        //     })
        // })
        return axios.get('https://randomuser.me/api/?results=30').then((data) => {
            let array = data.data.results;
            return array.map((element) => {
                return new User(element.name.first, element.name.last, element.email, element.dob, element.picture, element.gender)
            })
        })

    }

    getSearchData() {
        return axios.get('https://randomuser.me/api/?results=30').then((data) => {
            let array = data.data.results;
            return array.map((element) => {
                return new User(element.name.first, element.name.last, element.email, element.dob, element.picture)
            })
        })
    }
}

export default new ServiceData()


//prepakivanje podataka sa servera