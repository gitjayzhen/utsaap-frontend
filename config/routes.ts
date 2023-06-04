export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user', routes: [{ name: '登录', path: '/user/login', component: './user/Login' }] },
      { component: './404' },
    ],
  },
  { path: '/welcome', name: 'Dashboard', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    name: '元素管理',
    icon: 'crown',
    access: 'canAdmin',
    // component: './Admin',
    routes: [
      { path: '/admin/sub-page', name: '页面元素', icon: 'smile', component: './case-design' },
      { component: './404' },
    ],
  },
  { name: '全局参数', icon: 'table', path: '/list', component: './TableList' },
  {
    path: '/admin',
    name: '用例管理',
    icon: 'crown',
    access: 'canAdmin',
    // component: './Admin',
    routes: [
      { path: '/admin/sub-page', name: '用例列表', icon: 'smile', component: './case-design' },
      { component: './404' },
    ],
  },
  {
    path: '/admin',
    name: '任务日志',
    icon: 'crown',
    access: 'canAdmin',
    // component: './Admin',
    routes: [
      { path: '/admin/sub-page', name: '用例日志', icon: 'smile', component: './case-design' },
      { component: './404' },
    ],
  },
  { name: '任务管理', icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
