import React, { Component } from 'react'
import axios from 'axios'

class Details extends Component {
    state = {
        results: {}
    }

    componentDidMount () {
        axios.get(`https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json/
        results.get?title=${this.props.match.params.title}&api-key=gNz313xLa50RqANKsi1vxPWf4Vdxn8Jx`)
        .then(res => {
            console.log(res.data)
           //this.setState({lists: res.data.results})
        })
        .catch(err => console.log(err))

    }



    render() {
        return (
            <div>
            <h1>Details</h1>
                
            </div>
        )
    }
}
export default Details
