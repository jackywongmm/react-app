import React, { Component } from 'react'

class Home extends Component {
  render () {
    return (
      <div className="home" onClick={()=>{this.props.history.push('/Setting')}} style={{background:'red'}}>
        home
      </div>
    )
  }
}
export default Home
