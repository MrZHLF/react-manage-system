import React, { useState } from 'react'
import { Table,Button,Row,Col,Modal,Form,Input,Avatar  } from 'antd';
function Tables () {
  
  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align:"center"
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    align:"center"
  },{
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    align:"center",
    render:(text,rowData) => {
      return (
        <div>{rowData.sex == 0 ? '男' : '女'}</div>
      )
    }
  }, {
    title: '头像',
    dataIndex: 'avatar',
    key: 'avatar',
    align:"center",
    render:(text,rowData) => {
      return (
        <Avatar src={rowData.avatar} size={40} alt="头像"/>
      )
    }
  },{
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    align:"center"
    }, {
    title: "操作",
    key: "action",
    align:"center",
    render: (text, rowData) => {
      return (
        <div>
          <Button type="primary" onClick={() => {handleEdit(rowData.id)}}>编辑</Button>
          <Button type="primary" danger onClick={() => handleRemove(rowData)}>删除</Button>
        </div>
      )
    }
  }]


  const [list, setList] = useState([{
    id:1,
    key: '1',
    name: '张三',
    avatar:"https://cmsres.dianzhenkeji.com/anonymous/2021/6/9/1402554386424664064.png",
    age: 20,
    sex: 0,
    address:"郑州市"
  },{
    id:2,
    key: '2',
    name: '李四',
    avatar:"https://cmsres.dianzhenkeji.com/anonymous/2021/4/1/1377440035200176128.jpg",
    age: 25,
    sex: 1,
    address:"周口市"
    }])
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const handleClickModel = () => {
    setIsModalVisible(true)
  }
  
  const handleOk = (e) => {
    setIsModalVisible(false)

    console.log(e,'request');
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleEdit = (item) => {
    console.log(item,'444');
  }

  const handleRemove = (item) => {
    console.log(item,'4');
  }
  return (
    <div className="app-container">
      <Row>
        <Col span={20}></Col>
        <Col span={4}>
          <Button type="primary" onClick={handleClickModel}>添加</Button>
        </Col>
      </Row>
      <Table bordered columns={columns} dataSource={list} pagination={false} />
      <Modal title="标题" visible={isModalVisible}  footer={null} closable={false}>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          initialValues={{ remember: true }}
          onFinish={handleOk}
        >
          <Form.Item
            label="姓名"
            name="name">
            <Input />
          </Form.Item>
          <Form.Item
            label="年龄"
            name="age">
            <Input />
          </Form.Item>
          <Form.Item
            label="地址"
            name="address">
            <Input />
          </Form.Item>
          <Form.Item labelAlign="right">
            <Button type="primary" onClick={handleCancel} danger>取消</Button>
            <Button type="primary" htmlType="submit">确定</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
export default Tables