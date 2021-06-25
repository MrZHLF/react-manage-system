import {  HomeOutlined, TableOutlined,ContainerOutlined } from '@ant-design/icons';

const Router = [
  {
    title: '首页',
    icon: <HomeOutlined />,
    key: '/main/dashboard',
  },
  {
    title: '表单列表',
    icon: <ContainerOutlined />,
    key: '/main/forms', // 菜单
    children: [
      {
        key: '/main/forms/basicsForm',
        title: '基础表单',
        icon: '',
      },
      {
        key: '/main/forms/seniorForm',
        title: '封装表单',
        icon: '',
      },
    ],
  },
  {
    title: '表格',
    icon: <TableOutlined />,
    key: '/main/table',
    children: [
      {
        key: '/main/table/basicsTables',
        title: '基础表格',
        icon: '',
      },
      {
        key: '/main/table/seniorTables',
        title: '封装表格',
        icon: '',
      },
    ],
  },
]

export default Router
