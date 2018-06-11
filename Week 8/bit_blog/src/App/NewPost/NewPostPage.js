import React from 'react'
import dataService from '../../Services/dataServices'
import { Link, Redirect } from 'react-router-dom'

class NewPostPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            redirect: false,
            isInputValidate: true,
            errorOnServer: false,
            isRequestMakeGetServer: true

        }

        this.titleHandler = this.titleHandler.bind(this)
        this.bodyHandler = this.bodyHandler.bind(this)
        this.postNewPostData = this.postNewPostData.bind(this)

    }


    titleHandler = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    bodyHandler = (event) => {
        this.setState({
            body: event.target.value
        })
    }
    postNewPostData() {
        let userId = parseInt(9 * Math.random() + 1, 10)
        const obj = {
            userId: userId,
            title: this.state.title,
            body: this.state.body

        }
        if (obj.title !== '' && obj.body !== '') {
            dataService.postNewPost(obj, this.state.posts).then(response => {


                if (response) {
                    this.setState({
                        redirect: true
                    })
                } else {
                    this.setState({
                        errorOnServer: true

                    })
                }
            })
        } else {

            this.setState((prevState) => {
                return ({
                    isInputValidate: false,

                })
            })
        }

    }

    redirect() {
        return (this.state.redirect) ? <Redirect to='/home' /> : ''
    }

    render() {
        return (

            <div className='offset-1'>
                <div id="new-post-data">
                    <h2 className='new-post-h'>NEW POST</h2>
                    {(!this.state.isInputValidate) ? <div className='error'>Print the text into both fields</div> : ''}
                    {(this.state.errorOnServer) ? <div className='error'>There has been error on server!</div> : ''}
                    <h3 className='label'>Title</h3>
                    <input type='text' id='input-title' value={this.state.title} onChange={this.titleHandler} />
                    <h3 className="label">Content</h3>
                    <textarea name="content" id="text-post" rows="5" className='col-10' value={this.state.body} onChange={this.bodyHandler}></textarea>
                    <div className='offset-9'>
                        <Link to='/home'><input type="button" value="Cancel" className='btn' /></Link>
                        <input type="button" value="Save" className='btn' onClick={this.postNewPostData} />
                    </div>

                </div>
                {this.redirect()}
            </div>
        )
    }

}

export default NewPostPage