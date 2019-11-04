import React, { Component } from 'react'
import styles from './index.module.css'
import { NavBar, Icon } from 'antd-mobile';

class Header extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render () {
    return (
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => this.props.history.go(-1)}
        rightContent={[
          <Icon key="1" type="ellipsis" />,
        ]}
      >
        <span className={styles.title}>标题</span>
      </NavBar>
    )
  }
}
export default Header
