const Router = [
  {
    title: '首页',
    icon: 'laptop',
    key: '/main/dashboard',
  },
  {
    title: '表单列表',
    icon: 'laptop',
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
]

export default Router
