import React from 'react'
import AuthorInfo from './AuthorInfo';
import Address from './Address';
import Company from './Company';
import { Link } from 'react-router-dom'
import dataServices from '../../Services/dataServices'

class SingleAuthorPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            author: {}
        }

    }


    componentDidMount() {
        const authorId = this.props.match.params.authorId //react router izvlacenje parametara iz url!!!!
        console.log(authorId);

        dataServices.fetchSingleAuthorData(authorId).then(author => {
            this.setState({
                author: author
            })

        })
    }


    render() {
        return (
            <div className='author-info'>
                <span id="allAuthor_link"><Link to='/authors'>All authors</Link></span>
                <AuthorInfo name={this.state.author.name} userName={this.state.author.userName} email={this.state.author.email} phone={this.state.author.phone} />
                <hr />
                <Address street={this.state.author.street} city={this.state.author.city} zipCode={this.state.author.zipCode} />
                <hr />
                <Company name={this.state.author.companyName} slogan={this.state.author.companySlogan} />
                <hr />
            </div>
        )
    }
}

export default SingleAuthorPage