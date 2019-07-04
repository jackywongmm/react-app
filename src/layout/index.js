import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"


import Header from '../components/Header'
import Footer from '../components/Footer'

export default class Layout extends Component {
    render () {
        return (
            <Router>
                <Route render={(props ) => (
                    <React.Fragment>
                        <Header {...props}></Header>
                        {this.props.children}
                        <Footer {...props}></Footer>
                    </React.Fragment>
                )}></Route>
            </Router>
        )
    }
}
