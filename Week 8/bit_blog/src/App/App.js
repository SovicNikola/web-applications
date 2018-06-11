import React, { Component } from 'react';
import Header from './Partials/Header'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import Footer from './Partials/Footer';
import HomePage from './Home/HomePage';
import AboutPage from './About/AboutPage';
import AuthorsPage from './Authors/AuthorsPage'
import SinglePostPage from './SinglePost/SinglePostPage'
import SingleAuthorPage from './SingleAuthor/SingleAuthorPage';
import NewPostPage from './NewPost/NewPostPage'

class App extends Component {
  render() {
    return (
      <div className='container backColor'>
        <Header />
        <Switch>
          <Route exact path='/home' component={HomePage} />
          <Route path='/singlePost/:postId' component={SinglePostPage} />
          <Route path='/authors' component={AuthorsPage} />
          <Route path='/singleAuthor/:authorId' component={SingleAuthorPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/newPost' component={NewPostPage} />
          <Redirect from='/' to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
