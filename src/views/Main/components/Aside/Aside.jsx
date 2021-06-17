import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import Router from '@/router/index'
import styles from './index.module.scss'
import logo from '@/assets/img/20190722123705.png'
import { Menu } from 'antd'
const { SubMenu } = Menu

class Aside extends Component {
  constructor(props) {
    console.log(props.collapsed);
    super(props)
    this.state = {
      selectedKeys: [],
      openKeys: [],
      collapsed: false,
    }
  }
  componentDidMount() {
    // 菜单状态
    const pathname = this.props.location.pathname ?  this.props.location.pathname : ""
    const menukey = pathname.split('/').slice(0, 3).join('/')

    const menuHigh = {
      selectedKeys: pathname,
      openKeys: menukey,
    }
    this.selectMenuHigh(menuHigh)
  }

  // 监听父组件传递的信息
  static getDerivedStateFromProps (props) {
    return {
      collapsed: props.collapsed
    }
  }
  openMenu = (openKeys) => {
    // 展开
    this.setState({
      openKeys: [openKeys[openKeys.length - 1]],
    })
  }

  // 选中菜单
  selectMenu = ({ item, key, keyPath }) => {
    const menuHigh = {
      selectedKeys: key,
      openKeys: keyPath[keyPath.length - 1],
    }
    this.selectMenuHigh(menuHigh)
  }

  // 菜单高亮
  selectMenuHigh = ({ selectedKeys, openKeys }) => {
    this.setState({
      selectedKeys: [selectedKeys],
      openKeys: [openKeys],
    })
  }
  // 处理一级菜单
  renderMenu = ({ title, key }) => {
    return (
      <Menu.Item key={key}>
        <Link to={key}>
          <span>{title}</span>
        </Link>
      </Menu.Item>
    )
  }
  // 处理子级菜单 判断是否有children 通过递归的方式
  renderSubMnenu = ({ title, key, children }) => {
    return (
      <SubMenu key={key} title={title}>
        {children &&
          children.map((item) => {
            return item.children && this.children.length > 0
              ? this.renderSubMnenu(item)
              : this.renderMenu(item)
          })}
      </SubMenu>
    )
  }
  render() {
    const { selectedKeys, openKeys,collapsed } = this.state
    return (
      <div className={styles.menuWrap}>
        <div className={styles.menuLogo}>
          <img className={styles.logo} src={logo} alt="" />
					{!collapsed && <span>React管理</span>}
        </div>
        <Menu
          onOpenChange={this.openMenu}
          onClick={this.selectMenu}
          theme="dark"
          mode="inline"
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          style={{ height: '100%', borderRight: 0 }}
        >
          {Router &&
            Router.map((item) => {
              return item.children && item.children.length > 0
                ? this.renderSubMnenu(item)
                : this.renderMenu(item)
            })}
        </Menu>
      </div>
      
    )
  }
}

export default withRouter(Aside)
