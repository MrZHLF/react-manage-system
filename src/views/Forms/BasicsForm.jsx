import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'

class Basics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      layout: {
        labelCol: { span: 2 },
        wrapperCol: { span: 16 },
      },
      formData: {
        username: '',
        password: '',
      },
    }
  }
  onFinish = (values) => {
    console.log('Success:', values)
    this.state.values.resetFields()
  }
  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  render() {
    const { formData, layout } = this.state
    return (
      <div className="container">
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input value={formData.username} placeholder="请输入邮箱" />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              value={formData.password}
              placeholder="请输入密码"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              确定
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Basics
