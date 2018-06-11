let loremIpsum = require('lorem-ipsum');
let arrayOfBlogs = [];
const blogs = () => {
    let counter = 0;
    for (let i = 0; i < 20; i++) {
        let obj = {};
        obj.id = counter;
        obj.title = loremIpsum({ count: 3, units: 'words' });
        obj.description = loremIpsum({ count: 2, units: 'sentences' });

        arrayOfBlogs.push(obj)
        counter++
    }
    return arrayOfBlogs
}

module.exports = blogs