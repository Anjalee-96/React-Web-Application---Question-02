import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        lists: [],
        heading: 'Top Sold Books'
    }
    componentDidMount() {
        axios.get('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=gNz313xLa50RqANKsi1vxPWf4Vdxn8Jx')
        .then(res => {
            //console.log(res.data)
           this.setState({lists: res.data.results})
        })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <Context.Provider value={this.state}>
            {this.props.children}

            </Context.Provider>
            
        )
    }
}

export const Consumer = Context.Consumer;
