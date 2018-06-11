import React from 'react'
import dataService from '../../Services/dataServices'
import { Link } from 'react-router-dom'
import MorePosts from './MorePosts'




class SingleAuthorPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            author: '',
            userPosts: [],
           

        }
    }
    componentWillReceiveProps(nextProps) {
        let newPostId = nextProps.match.params.postId;
        this.loadData(newPostId)
    }

    loadData(id) {
        dataService.fetchSinglePostData(id).then((data) => {
            this.setState({
                post: data,
            });
            dataService.fetchAuthorData(data.userId).then(authors => {
                let author1 = authors.filter(author => author.id === data.userId)
                this.setState({
                    author: author1[0].name,
                    authorId: author1[0].id
                })

            })
            dataService.fetchPostsFromAuthorData(data.userId, id).then(userPosts => {
                this.setState({
                    userPosts: userPosts
                })
            })
        })
    }

    componentDidMount() {
        let postId = this.props.match.params.postId
        this.setState({
            postId: postId,
        
        })
        this.loadData(postId)


    }


    render() {
        
        return (
            <React.Fragment>
                <span id="navToHome"><Link to='/home>'><i className="fa fa-backward"> </i> Back </Link></span>
                <h2 className="single_page_h offset-3 col-6">{this.state.post.title}</h2>
                <span className='col-12' id="sp_span"><Link className="single_author_link" to={'/singleAuthor/' + this.state.authorId}>{this.state.author}</Link></span>
                <p className='offset-2 col-8 spP'>{this.state.post.body}</p> 
                {/* prvo je undefinef props, kako da se to prevazidje */}
                <hr />
                <MorePosts posts={this.state.userPosts} />
            </React.Fragment>
        )
    }


}

export default SingleAuthorPage