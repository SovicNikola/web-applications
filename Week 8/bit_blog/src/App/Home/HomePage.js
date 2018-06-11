import React from 'react';
import dataServices from '../../Services/dataServices';
import PostList from './PostList'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }


    componentDidMount() {
        dataServices.fetchPostData().then((posts) => {
            this.setState({
                posts: posts
            })
        });
    }


    render() {
        return (
            <div className="container">
                <h6 id="new-post"><Link to='/newPost'> New post</Link></h6>
                <h2 id="poste_home">Posts</h2>
                <PostList posts={this.state.posts} />
            </div>


        )
    }
}

export default HomePage;
