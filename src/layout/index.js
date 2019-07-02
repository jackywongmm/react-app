import React, { Component } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default class Layout extends Component {
    render () {
        return (
            <div>
                <Header></Header>
                {this.props.children}
                <Footer></Footer>
            </div>
        )
    }
}
