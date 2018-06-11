import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
// ToDo number of posts per author
const ListOfAuthors = (props) => {
    // console.log(props.posts);
    // console.log(props.authors);

    if (!props.authors && !props.posts) {
        return null;
    }

    return (
        <Fragment>
            <h3 id='authors-header'>AUTHORS ({props.authors.length})</h3>
            {
                props.authors.map(author => {
                    let numOfPosts = 0;
                    for (let i in props.posts) {
                        if (author.id == props.posts[i].userId) {
                            numOfPosts += 1
                        }
                        else {
                            continue
                        }
                    }
                    return (
                        <div className="col-8 offset-2 author" key={author.id}>
                            <Link to={'/singleAuthor/' + author.id}>{author.name}({numOfPosts} total posts}</Link>
                        </div>)
                })}
        </Fragment>
    )
}

export default ListOfAuthors;