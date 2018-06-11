import React from 'react'
import { Link } from 'react-router-dom'

const PostListItem = (props) => {
    console.log(props);


    return (
        <div className="post col-12">
            <div className="vertical">
                <h2><Link to={'/singlePost/' + props.postId}>{props.title}</Link></h2>
                <p>{props.body.charAt(0).toUpperCase() + props.body.slice(1)}</p>
            </div>
        </div >
    )
}

export default PostListItem;