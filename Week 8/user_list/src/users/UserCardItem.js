import React from 'react'
import HiddenEmail from '../hiddenData/HiddenEmail';
import NewDateFormat from '../hiddenData/NewDateFormat';
import PropTypes from 'prop-types'
const UserListExtra = (props) => {


    const user = props.user;
    let cName;
    if (user.gender == 'female') {
        cName = "card col-4 femaleBackground"
    } else {
        cName = "card col-4"
    }
    return (
        
    <div className={cName} >
        <img className="card-img-top" src={user.largeImage} alt="Card image cap" /> <span className='nameInImg' > {user.name} </span>
        <div className="card-body" >
            <p className="card-title" > {HiddenEmail(user.email)} </p>
            <p className="card-text" > {NewDateFormat(user.dob)} </p>
        </div>
    </div>);
}

UserListExtra.propTypes = {

    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        dob: PropTypes.string.isRequired,
        largeImage: PropTypes.string.isRequired,
        medium: PropTypes.string.isRequired

    })

}
export default UserListExtra;