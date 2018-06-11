import React from 'react'

const AuthorInfo = (props) => {
    return (
        <div className='row offset-1'>
            <div className="img-div col-3">
                <img src="https://cdn1.iconfinder.com/data/icons/photography-2/512/YPS__human_avatar_portrait_photography_picture_photo-512.png" alt="user" className="author-img" />
            </div>
            <div className="col-6 offset-1">
                <div className='author-info-name'>{props.name}</div>
                <div className='author-info' >username : {props.userName}</div>
                <div className='author-info'>email : {props.email}</div>
                <div className='author-info'>phone number : {props.phone}</div>
            </div>
            
        </div>

            )
        
        }
        
        
        
export default AuthorInfo