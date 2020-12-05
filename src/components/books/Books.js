import React, { Component } from 'react'
import { Consumer } from '../context'
import Spinner from '../layout/Spinner'

import Book from '../books/Book'


class Books extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { lists, heading } = value
                    if(lists === undefined || lists.length === 0) {
                        return <Spinner />

                    } else {
                        return (
                            <React.Fragment>
                            <h3 className="text-center mb-4">{heading}</h3>
                            <div className="row">
                                {lists.map(item => (
                                    <Book key={item.results} book={item}/>
                                ))}

                            </div>
                            </React.Fragment>
                        )

                    }

                }}
            </Consumer>
        )
    }
}   
export default Books;
