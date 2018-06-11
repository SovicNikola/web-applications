import React from 'react';
import UserListItem from './UserListItem';
import UserListExtra from './UserCardItem';
import PropTypes from 'prop-types';
import serviceData from '../Entities/serviceData';
import Counter from './counter.js'
import NoSearchResult from './NoSearchResult'


class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: true,


        }
        this.filterUserList = this.filterUserList.bind(this)


    }

    onClick = () => {

        this.setState((prevState, props) => {

            return ({
                selected: !prevState.selected
            })

        })
        // this.setState({
        //     selected: !this.state.selected

        // })
    }

    filterUserList(element) {
        let name=(element.name + element.surname).toLowerCase()
        let searchInputData= (this.props.searchString).toLowerCase()
        if (!this.props.searchString || this.props.searchString.length === 0) { return true; }

        return name.includes(searchInputData)
    }


    render() {

        return (
            <div className="container">
                <div className='row'>

                    {(this.props.listOfUsers.filter(this.filterUserList).length == 0) ? <NoSearchResult /> : <Counter listOfUsers={this.props.listOfUsers.filter(this.filterUserList)} />}
                    {this.props.listOfUsers.filter(this.filterUserList).map((element, i) => (
                        (this.props.clicked) ? <UserListItem key={i} user={element} /> : <UserListExtra key={i} user={element} />
                    ))}
                </div>
            </div>
        )
    }
}
UserList.propTypes = {
    users: PropTypes.object.isRequired
}
export default UserList;