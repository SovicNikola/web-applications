import React from 'react'
import ListOfAuthors from './ListOfAuthors';
import dataService from '../../Services/dataServices';
import Animation from '../Partials/Animation'


class AuthorsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            authors: [],
            posts: [],
            isPostsReady: false
        }
    }
    countPostsPerAuthor(posts) {
        posts.sort((a, b) => {
            return a.userId - b.userId
        })
        this.setState({
            posts: posts,
            isPostsReady: true
        })
    }
    componentDidMount() {
        dataService.fetchAuthorData().then(authors => {
            this.setState({
                authors: authors
            })
            dataService.fetchPostData().then(posts => {



                this.countPostsPerAuthor(posts);


            })
        })

    }
    render() {
        return (
            <div className='container'>
                {(this.state.isPostsReady) ? <ListOfAuthors authors={this.state.authors} posts={this.state.posts} /> : <Animation />}
            </div>
        )
    }
}

export default AuthorsPage