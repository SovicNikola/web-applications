export default class data {
    queryBlog() {
        return fetch('http://127.0.0.1:3000/')
            .then((data) => {
                return data.json()
            }).then((data) => {
                console.log(data);

                return data
            })
    }
}