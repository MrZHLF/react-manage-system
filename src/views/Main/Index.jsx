import React, { Component } from 'react'
import styles from './index.module.scss'

import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import { MainRoutes } from './../../App'
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
          <Sider collapsed={this.state.collapsed}>
            <Aside collapsed={this.state.collapsed} />
          </Sider>
          <Layout>
            <Header
              collapsed={this.state.collapsed}
              toggle={this.toggleCollapsed}
            />
            <Content className={styles.mainRight}>
              <MainRoutes />
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default Index
