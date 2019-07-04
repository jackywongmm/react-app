import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItem: 'Life'
    }
    this.handleOnPress = this.handleOnPress.bind(this)
  }
  handleOnPress (route, itemName) {
    console.log(itemName)
    this.setState({
      currentItem: itemName
    })
    this.props.history.push(route)
  }
  render () {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        noRenderContent={true}
        tabBarPosition="bottom"
      >
        <TabBar.Item
          title="Life"
          key="Life"
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
          }}
          />
          }
          selected={this.state.currentItem === 'Life'}
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
          }}
          />
          }
          badge={1}
          data-seed="logId"
          onPress={() => this.handleOnPress('./', 'Life')}
        >
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
            }}
            />
          }
          selected={this.state.currentItem === 'Koubei'}
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
            }}
            />
          }
          title="Koubei"
          key="Koubei"
          badge={'new'}
          data-seed="logId1"
          onPress={() => this.handleOnPress('./Setting', 'Koubei')}
        >
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
            }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
            }}
            />
          }
          title="Friend"
          key="Friend"
          dot
        >
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
          title="My"
          key="my"
        >
        </TabBar.Item>
      </TabBar>
    )
  }
}
export default Footer
