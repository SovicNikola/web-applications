import React, { Component } from 'react';
import '../../src/App.css';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import { Switch, Route, Redirect } from 'react-router-dom'
import UsersPage from './Users/UserPage'
import AboutPage from './Users/AboutPage'
import serviceData from '../Entities/serviceData';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayList: true,
            searchString: '',
            listOfUsers: [],
            loading:true
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.clickHandlerRefresh = this.clickHandlerRefresh.bind(this);
        this.search = this.search.bind(this)
    }
    clickHandler(event) {
        localStorage.setItem('displayList', JSON.stringify(!this.state.displayList));
        // console.log(this.state.displayList);

        this.setState((prevState) => {
            return ({
                displayList: !prevState.displayList,
            })
        })
        this.loadUsers()
    }
    clickHandlerRefresh() {

        this.refreshUsers()

    }
    componentDidMount() {        ///kad se komponenta izrenderovala prvi put(mounting lifestyle),poziva se automatski ova metoda

        this.loadUsers();
        
        const displayListJson = localStorage.getItem('displayList');
        if (displayListJson) {
    
          const displayList = JSON.parse(displayListJson); 
          this.setState({
            displayList: displayList,
            loading: false
          })
        }
      }
    refreshUsers() {
        let curRefDate = new Date();
        localStorage.setItem('curRefDate', JSON.stringify(curRefDate))


        serviceData.getData().then((data) => {
            localStorage.setItem('listOfUsers', JSON.stringify(data));
            console.log(data)
           
            return (
            
                
                this.setState({
                    listOfUsers: data,
                    loading: false
                })
            )
        })
    }
    loadUsers() {
        const listOfUsersInLocalStorage = localStorage.getItem('listOfUsers')
    
    
        if (listOfUsersInLocalStorage) {
          const listOfUsers = JSON.parse(listOfUsersInLocalStorage)
          this.setState({
            listOfUsers: listOfUsers,
            loading: false
          })
        } else {
          this.refreshUsers()
        }
      }
    search(data) {
        this.setState({
            searchString: data
        });
    }
    render() {
        return (
            <div className='container-fluid'>
                <Header handler={this.clickHandler} refHandler={this.clickHandlerRefresh} display={this.state.displayList} />
                <Switch>
                    <Route exact path="/" render={() => (<UsersPage displayList={this.state.displayList} search={this.search} searchString={this.state.searchString} listOfUsers={this.state.listOfUsers} loading={this.state.loading}/>)} />
                    <Route path="/about" component={AboutPage} />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default App