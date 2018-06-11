import React, { Component } from 'react';
import serviceData from '../../Entities/serviceData';
import SearchBox from '../../partials/searchBox';
import UserList from '../../users/UsersList';
import Animation from '../../users/Animation.js'


class UserPage extends Component {
  constructor(props) {
    super(props)
    this.state = {

      refresh: true,
     
      loading: true

    }


  }

  render() {
    return (
      <div className='container-fluid'>
        {(this.props.loading) ? '' : <SearchBox search={this.props.search} />}
        {(this.props.loading) ? <Animation /> : <UserList clicked={this.props.displayList} listOfUsers={this.props.listOfUsers} searchString={this.props.searchString} />}
      </div>


    );
  }
}

export default UserPage;
