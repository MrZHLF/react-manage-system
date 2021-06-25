import React, { Component,Fragment } from 'react'

import FormCom from '../../components/Form'
class seniorForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formLayout: {
        labelCol: { span: 2 },
        wrapperCol: {span:22}
      },
      formItem: [
        {
          type:"Input",
          label: '姓名',
          name: "name",
          required: true,
          style: {width: '200px'},
          placeholder:"请输入姓名"
        },
        {
          type:"Input",
          label: '地址',
          name: "address",
          required: true,
          style: {width: '200px'},
          placeholder: "请输入地址",
          message: "地址不能为空"
        },
        {
          type:"NumberInput",
          label: '年龄',
          name: "age",
          max: 50,
          min:1,
          required: true,
          style: {
            width: '200px'
          },  
          placeholder:"请输入年龄"
        },
        {
          type:"Radio",
          label: '性别',
          name: "sex",
          required:true,
          defaultValue:1,
          placeholder: "请选择性别",
          style: {width: '200px'},
          options: [
            { label: "男", value: 1 },
            { label: "女", value: 2 },
          ]
        },
        {
          type:"Checkbox",
          label: '多选',
          name: "check",
          required:true,
          defaultValue:1,
          placeholder: "请选择一项",
          style: {width: '200px'},
          options: [
            { label: "红色", value: "red" },
            { label: "蓝色", value: "blue" },
            { label: "黑色", value: "black" },
            { label: "黄色", value: "yellow" },
            { label: "橘色", value: "origin" },
          ]
        },
        {
          type:"Select",
          label: '下拉选择',
          name: "select",
          required:true,
          placeholder: "请选择一项列表",
          style: {
            width: '200px'
          },
          mode:"multiple", //是否设置多选
          options: [
            { label: "Lucy", value: 'lucy' },
            { label: "Jack", value: 'jack' },
            { label: "小米", value: 'xiaomin' },
          ]
        },
        {
          type:"TimePicker",
          label: '下拉选择',
          name: "time",
          required: true,
          value: "",
          style: {
            width: '200px'
          },
          placeholder: "请选择时间",
        }
      ]
    }
  }
  onSubmit = (value) => {
    console.log(value,'接受子组件提交信息表单');
  }
  render () {
    const {formLayout, formItem} = this.state
    return (
      <Fragment>
        <FormCom formLayout={formLayout} formItem={formItem} submit={this.onSubmit}></FormCom>
      </Fragment>
    )
  }
}

export default seniorForm
