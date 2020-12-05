import React, { Component } from 'react'
import { Consumer } from '../context'
import Spinner from '../layout/Spinner'

import Details from '../books/Details'

class Data extends Component {
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
                                    <Data key={item.results} details={item}/>
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
export default Data;
