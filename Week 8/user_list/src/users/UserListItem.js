import React from 'react';
import NewDateFormat from '../hiddenData/NewDateFormat';
import HiddenEmail from '../hiddenData/HiddenEmail';
import PropTypes from 'prop-types';




const UserListItem = (props) => {
    {
        const user = props.user;
       
        let cName;
        if (user.gender == 'female') {
            cName = "col-12 femaleBackground"

        } else {
            cName = "col-12"
          
        }
     

        return (
            <div className="col-12">
                <div className={cName}>

                    <div className='list col-1'>
                        <img src={user.medium} alt='picture' className="img" />
                    </div>

                    <span className='col-10'>name: {user.name} {user.surname}</span>
                    <span className='col-10'><i className="fa fa-envelope"></i> email:{HiddenEmail(user.email)}</span>
                    <span className='col-10'><i className="fa fa-birthday-cake"></i> date of birth: {user.dob}</span>

                </div>
            </div>);
    }
}
UserListItem.propTypes = {
    user: PropTypes.object.isRequired
}
export default UserListItem;