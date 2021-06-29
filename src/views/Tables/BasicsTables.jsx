import React, { useState,useRef } from 'react'
import { Table,Button,Row,Col,Modal,Form,Input,Avatar,message,Radio} from 'antd';
function Tables () {
  
  const columns = [{
    title: '姓名',
    dataIndex: 'nickName',
    key: 'nickName',
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
          <Button type="primary" onClick={() => {handleEdit(rowData)}}>编辑</Button>
          <Button type="primary" danger onClick={() => handleRemove(rowData)}>删除</Button>
        </div>
      )
    }
  }]


  const [list, setList] = useState([{
    id:1,
    key: '1',
    nickName: '张三',
    avatar:"https://img0.baidu.com/it/u=3311900507,1448170316&fm=26&fmt=auto&gp=0.jpg",
    age: 20,
    sex: 0,
    address:"郑州市"
  },{
    id:2,
    key: '2',
    nickName: '李四',
    avatar:"https://img0.baidu.com/it/u=3087360587,4181846315&fm=26&fmt=auto&gp=0.jpg",
    age: 25,
    sex: 1,
    address:"周口市"
  }])


    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [id,setId] = useState('')
  
  const handleClickModel = () => {
    setIsModalVisible(true)
  }
  
  const handleOk = (e) => {
    setIsModalVisible(false)
    console.log(e,'request');
    //重置表单
    if (id && id !== '') {
      // 编辑接口
      console.log('编辑接口');
    } else {
      let requestData = {
        id: Math.random() * 5,
        ...e,
      }
      setList([...list,requestData])
      console.log('新增接口');
    }
    form.resetFields();
    setId('')
  }
  const handleCancel = () => {
    setIsModalVisible(false)
    form.resetFields();
  }

  const handleEdit = (item) => {
    form.setFieldsValue(item)
    // 表单数据回显
    console.log(item,'item');
    setId(item.id)
    setIsModalVisible(true)
  }

  const handleRemove = (item) => {
    // 删除
    Modal.confirm({
      title:"提示?",
      content:`确定要删除用户为${item.nickName}吗?`,
      okText:"确定",
      cancelText:"取消",
      onOk() {
        message.success('删除成功')
      },
      onCancel() {
        message.warn('取消删除')
      }
    })
  }
  return (
    <div className="app-container">
        <Row>
          <Col span={20}></Col>
          <Col span={4}>
            <Button type="primary" onClick={handleClickModel}>添加</Button>
          </Col>
        </Row>
      <div className="py">
        <Table bordered columns={columns} dataSource={list} pagination={false} />
      </div>
      <Modal title={id ? '编辑信息' : '新增' } visible={isModalVisible}  footer={null} closable={false}>
        <Form
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          initialValues={{ sex:0 }} //设置Form.Item初始化值
          onFinish={handleOk}
        >
          <Form.Item label="姓名" name="nickName">
            <Input />
          </Form.Item>
          <Form.Item label="年龄" name="age">
            <Input />
          </Form.Item>
          <Form.Item label="性别" name="sex">
            <Radio.Group value={0}>
              <Radio value={0}>男</Radio>
              <Radio value={1}>女</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="头像" name="avatar">
            
          </Form.Item>
          <Form.Item label="地址" name="address">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleCancel} danger>取消</Button>
            <Button type="primary" htmlType="submit">确定</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
export default Tables