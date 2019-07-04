import React, { Component } from 'react'
import { Link } from "react-router-dom"
// import './index.scss'
import { NavBar, Icon } from 'antd-mobile';

class Header extends Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => this.props.history.go(-1)}
        rightContent={[
          <Icon key="1" type="ellipsis" />,
        ]}
      >NavBar</NavBar>
    )
  }
}
export default Header
