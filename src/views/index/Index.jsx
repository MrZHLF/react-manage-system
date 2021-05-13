import React, { Component } from 'react'
import styles from './index.module.scss'

import Header from './components/Header/Header'
import { Layout } from 'antd'
const { Sider, Content } = Layout

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
  }
  componentDidMount() {
    const collapsed = JSON.parse(sessionStorage.getItem('collapsed'))
    this.setState({
      collapsed,
    })
  }
  toggleCollapsed = () => {
    const collapsed = !this.state.collapsed
    this.setState({
      collapsed,
    })
    sessionStorage.setItem('collapsed', collapsed)
  }

  render() {
    return (
      <div className={styles.main}>
        <Layout className={styles.mainContent}>
          <Sider collapsed={this.state.collapsed}>1111</Sider>
          <Layout>
            <Header
              collapsed={this.state.collapsed}
              toggle={this.toggleCollapsed}
            />
            <Content className={styles.mainRight}>1111</Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default Index
