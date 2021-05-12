import React, { Component, Fragment } from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, UnlockOutlined } from '@ant-design/icons'
import styles from './index.module.scss'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      loading: false,
    }
  }
  onFinish = (value) => {
    console.log(value)
    this.setState({
      loading: true,
    })
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 2000)
  }

  render() {
    const { username, password, loading } = this.state
    return (
      <Fragment>
        <div className={styles.loginWrap}>
          <div className={styles.loginCenter}>
            <div className={styles.title}>后台管理系统</div>
            <Form
              name="normal_login"
              className={styles.loginform}
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: '邮箱不能为空' },
                  { type: 'email', message: '邮箱格式不正确' },
                ]}
              >
                <Input
                  value={username}
                  prefix={<UserOutlined />}
                  placeholder="请输入邮箱"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: '密码不能为空' }]}
              >
                <Input
                  value={password}
                  prefix={<UnlockOutlined />}
                  placeholder="请输入密码"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  loading={loading}
                  htmlType="submit"
                  block
                >
                  登录
                </Button>
              </Form.Item>
              <div className={styles.tips}>账号密码随便输入</div>
            </Form>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Login
