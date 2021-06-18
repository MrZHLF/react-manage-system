import React, { useState } from 'react'
import { Table } from 'antd';
function Tables () {
  
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }]


  const [list, setList] = useState([{
    key: '1',
    name: 'John Brown',
    age: 20,
    address:"地址"
  }])


  return (
    <div>
      <Table columns={columns} dataSource={list}/>
    </div>
  )
}
export default Tables