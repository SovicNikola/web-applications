import { url } from '../Shared/constants'
import Post from '../Entities/Post'
import SinglePost from '../Entities/SinglePost'
import Author from '../Entities/Author'
import UserPosts from '../Entities/UserPosts'



class DataServices {
    fetchPostData = () => {
        return fetch(`${url}/posts`).then(results => {
            return results.json()
        }).then(data => {

            // data = data.slice(0, 33)
            let storagePosts = localStorage.getItem('posts');
            if (!storagePosts) {
                return data.map((post) => new Post(post.userId, post.id, post.title.toUpperCase().substring(0, 15), post.body.repeat(6)))
            } else {
                storagePosts = JSON.parse(storagePosts)
                // console.log(data.concat(storagePosts));
                return data.concat(storagePosts).map((post) => new Post(post.userId, post.id, post.title.toUpperCase().substring(0, 15), post.body.repeat(6)));
                // return data
            }
        })
    }

    fetchSinglePostData = (postId) => {
        return fetch(`${url}/posts/${postId}`).then(response => {
            return response.json()
        }).then(data => new SinglePost(data.title.toUpperCase().substring(0, 15), data.id, data.body.repeat(6), data.userId))
    }


    fetchAuthorData = () => {
        return fetch(`${url}/users`).then(response => {
            return response.json()
        }).then(data => {

            return data.map((author => {
                return new Author(author.id, author.name, author.username, author.email, author.phone, author.address.street, author.address.city, author.address.zipcode, author.company.name, author.company.catchPhrase)
            }))
        })


    }
    fetchSingleAuthorData = (authorId) => {
        return fetch(`${url}/users/${authorId}`).then(response => {
            return response.json()
        }).then(data => new Author(data.id, data.name, data.username, data.email, data.phone, data.address.street, data.address.city, data.address.zipcode, data.company.name, data.company.catchPhrase))
    }

    fetchPostsFromAuthorData = (authorId) => {
        return fetch(`${url}/posts?userId=${authorId}`).then(response => {
            return response.json()
        }).then(userPosts => {
            // let localPosts = localStorage.getItem('posts');
            // localPosts = JSON.parse(localPosts);
            // localPosts.filter(post => post.userId == authorId)
            //ToDo



            return userPosts.map((post) => new UserPosts(post.title.substring(0, 15), post.id, post.userId))
        })

    }

    postNewPost(obj) {
        let data = JSON.stringify(obj)
        return fetch(`${url}/posts`, {
            method: 'post',
            body: data,
            headers: { "Content-type": "application/json; charset=UTF-8" }

        }).then(response => {
            if (response.status >= 400) {

                return false   // govori da je odgovor izmedju 200 i 400
            } else {
                return response.json()
            }
        }).then((post) => {
            if (!post) {

                return false
            } else {
                const newPostId = parseInt(9000 * Math.random() + 1000, 10);
                post.id = newPostId;

                let posts = localStorage.getItem('posts');
                if (!posts) {
                    posts = [];
                } else {
                    posts = JSON.parse(posts)
                }
                posts.push(post)
                localStorage.setItem(`posts`, JSON.stringify(posts));
                return true
            }

        })
    }


}

export default new DataServices();