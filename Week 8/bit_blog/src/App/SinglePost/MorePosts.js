import React from 'react';
import { Link } from 'react-router-dom';


const MorePosts = (props) => {

    return (
        <div id="more-links" className='offset-1'>
            <h4>More posts from same author</h4>
            {props.posts.map(post => {
                return <div key={post.postId} className="single-post"><Link to={'/singlePost/' + post.postId}>{post.title}</Link></div>
            })}
        </div>
    )
}

export default MorePosts;