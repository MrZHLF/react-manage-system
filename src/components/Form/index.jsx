import React, { Component } from 'react';
import PropTypes from 'prop-types'

import moment from 'moment'

import { Form, Input, Button , InputNumber, Radio,Select, Switch,Checkbox,TimePicker  } from 'antd'
const { Option } = Select;


class FormCom extends Component {
  constructor(props) {
    console.log(props,'propsprops');
    super(props)
    this.state = {
      mesPreixr: {
        "Input": "请输入",
        "NumberInput": "请输入",
        "Radio": "请选择",
        "Switch": "请选择",
        "Select": "请选择",
        "Checkbox": "请选择",
        "TimePicker":"请选择"
      }
    }
    this.formRef = React.createRef()
  }

  // 处理校验规则
  // 根据 required 进行校验，
  rules = (item) => {
    const { mesPreixr } = this.state
    let rules = []
    if (item.required) {
      let message = item.message || `${mesPreixr[item.type]}${item.label}`
      rules.push({
        required: true,
        message
      })
    }
    return rules
  }

  inputElem = (item) => {
    // 处理input
    const rules = this.rules(item)
    return (
      <Form.Item label={item.label} name={item.name} rules={rules}  key={item.name}>
        <Input type="text" style={item.style} placeholder={item.placeholder} />
      </Form.Item>
    )
  }


  inputNumberElem = (item) => {
    // 处理 number 类型
    const rules = this.rules(item)
    return (
      <Form.Item label={item.label} name={item.name} rules={rules} key={item.name}>
        <InputNumber style={item.style} placeholder={item.placeholder} max={item.max} min={ item.min }/>
      </Form.Item>
    )
  }

  radioElem = (item) => {
    // 处理单选
    const rules = this.rules(item)
    return (
      <Form.Item label={item.label} name={item.name} rules={rules} key={item.name}>
        <Radio.Group value={item.defaultValue} >
          {
            item.options && item.options.map(elem => {
              return <Radio checked={true} key={elem.value} value={elem.value}>{ elem.label }</Radio>
            })
          }
        </Radio.Group>
      </Form.Item>
    )
  }

  checkboxElem = (item) => {
    // 处理多选
    const rules = this.rules(item)
    return (
      <Form.Item label={item.label} name={item.name} rules={rules} key={item.key}>
        <Checkbox.Group options={item.options}  />
      </Form.Item>
    )
  }

  selectElem = (item) => {
    // 处理下拉选择框
    const rules = this.rules(item)
    return (
      <Form.Item label={item.label} name={item.name} rules={rules} key={item.name}>
        <Select style={item.style} mode={item.mode} placeholder={item.placeholder}>
          {
            item.options && item.options.map(elem => {
              return <Option key={elem.value} value={elem.value}>{ elem.label }</Option>
            })
          }
        </Select>
      </Form.Item>
    )
  }

  switchElem = (item) => {
    // 处理开关
    return (
      <Form.Item label={item.label} name={item.name} key={item.name}>
        <Switch defaultChecked={ item.defaultChecked } checkedChildren="启用" unCheckedChildren="禁用"/>,
      </Form.Item>
    )
  }

  timePickerElem = (item) => {
    // 时间选择器
    const rules = this.rules(item)
    return (
      <Form.Item label={item.label} name={item.name} key={item.name} rules={rules}>
        <TimePicker value={item.value} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} style={item.style}/>
      </Form.Item>
    )
  }


  // 初始化
  initFormItem = () => {
    const { formItem } = this.props;
    if (!formItem || (formItem && formItem.length === 0)) {
      return false
    }

    const formList = []
    formItem.forEach(item => {
      if (item.type === 'Input') { formList.push(this.inputElem(item)) }
      if (item.type === 'NumberInput') { formList.push(this.inputNumberElem(item)) }
      if (item.type === 'Radio') { formList.push(this.radioElem(item)) }
      if (item.type === 'Select') { formList.push(this.selectElem(item)) }
      if (item.type === 'Switch') { formList.push(this.switchElem(item)) }
      if (item.type === 'Checkbox') { formList.push(this.checkboxElem(item)) }
      if (item.type === 'TimePicker') {formList.push(this.timePickerElem(item)) }
    })
    return formList
  }

  // 表单提交信息，传递给父组件触发
  onSubmit = (value) => {
    if (this.props.submit) {
      this.props.submit(value)

      //清空表单
      this.formRef.current.resetFields()
    }
  }

  render() {
    return (
      <Form
        ref={this.formRef}
        {...this.props.formLayout}
        onFinish={this.onSubmit}
        initialValues={{status:1}}
      >
        {this.initFormItem()}
        <Button type="primary" htmlType="submit">添加</Button>
      </Form>
    );
  }
}

export default FormCom;