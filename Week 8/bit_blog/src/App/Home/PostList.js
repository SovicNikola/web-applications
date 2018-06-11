import React from 'react';
import PostListItem from "../Home/PostListItem";

const PostList = (props) => {
    return (
        props.posts.map(post => {
            return <PostListItem {...post} key={post.postId} />
        })
    )
}

export default PostList