import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Tooltip, Dropdown, Menu } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CompressOutlined,
} from '@ant-design/icons'
import styles from './index.module.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: localStorage.getItem('ms_username') || 'Admin',
      fullscreen: false,
      collapsed: false,
      collapsed: props.collapsed,
    }
  }

  render() {
    const { collapsed } = this.state
    return (
      <div className={styles.header}>
        <div className={styles.collapseBtn} onClick={this.toggleMenu}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        <div className={styles.headerRight}>
          <div className={styles.headerUserCon}>
            <Tooltip
              title={this.state.fullscreen ? `取消全屏` : `全屏`}
              placement="bottom"
            >
              <div
                className={styles.btnFullscreen}
                onClick={this.setFullScreen.bind(this)}
              >
                <CompressOutlined />
              </div>
            </Tooltip>

            {/* 用户头像 */}
            <img
              className={styles.userAvator}
              src={require('../../../../assets/img/20190722123705.png')}
            />
            {/* 用户名下拉菜单 */}
            <Dropdown
              className={styles.userName}
              trigger={['click']}
              overlay={
                <Menu onClick={this.handleDropdown.bind(this)}>
                  <Menu.Item key="0" className={styles.dropItemLink}>
                    项目仓库
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item key="1" className={styles.dropItemLink}>
                    退出登录
                  </Menu.Item>
                </Menu>
              }
            >
              <span className={styles.elDropdownLink}>
                {this.state.username}
              </span>
            </Dropdown>
          </div>
        </div>
      </div>
    )
  }
  componentWillReceiveProps({ collapsed }) {
    this.setState({
      collapsed,
    })
  }
  toggleMenu = () => {
    this.props.toggle()
  }
  // 设置全屏
  setFullScreen() {
    const fullscreen = this.state.fullscreen
    const element = document.documentElement
    if (fullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    } else {
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.msRequestFullscreen) {
        // IE11
        element.msRequestFullscreen()
      }
    }
    this.setState({
      fullscreen: !fullscreen,
    })
  }
  // 用户名下拉菜单操作
  handleDropdown({ key }) {
    switch (key) {
      case '0':
        window.open('https://github.com/MrZHLF/React-Ant-Admin', '_blank')
        break
      case '1':
        localStorage.removeItem('ms_username')
        this.props.history.push('/login')
        break
      default:
        return
    }
  }
}

export default withRouter(Header)
