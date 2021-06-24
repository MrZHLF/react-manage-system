import React, { Component } from 'react'
import { Form, Input, Button,Radio, Select } from 'antd'
const { Option } = Select;

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
        radioValue: 1
      },
    }
    this.formRef = React.createRef()
  }
  onFinish = (values) => {
    console.log('Success:', values)
    this.formRef.current.resetFields()
  }
  render() {
    const { formData, layout } = this.state
    return (
      <div className="container">
        <Form
          {...layout}
          ref={this.formRef}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '邮箱不能为空' }]}
          >
            <Input value={formData.username} placeholder="请输入邮箱" />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '密码不能为空' }]}
          >
            <Input.Password
              value={formData.password}
              placeholder="请输入密码"
            />
          </Form.Item>

          <Form.Item
            label="单选"
            name="radioValue"
            rules={[{ required: true, message: '选项不能为空' }]}
          >
            <Radio.Group value={formData.radioValue}>
              <Radio value={1}>男</Radio>
              <Radio value={2}>女</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="多选"
            name="selectValue"
            rules={[{ required: true, message: '多选不能为空' }]}
          >
            <Select style={{ width: 120 }} allowClear={true} value={formData.selectValue}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
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
