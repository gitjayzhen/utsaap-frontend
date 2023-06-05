export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user', routes: [{ name: '登录', path: '/user/login', component: './user/Login' }] },
      { component: './404' },
    ],
  },
  { path: '/dashboard', name: 'Dashboard', icon: 'smile', component: './dashboard' },
  {
    path: '/elements',
    name: '元素管理',
    icon: 'crown',
    access: 'canAdmin',
    // component: './Admin',
    routes: [
      {
        path: '/elements/manager',
        name: '页面元素',
        icon: 'smile',
        component: './element-manager',
      },
      { component: './404' },
    ],
  },
  { name: '全局参数', icon: 'table', path: '/parameter', component: './parameter-manager' },
  {
    path: '/case',
    name: '用例管理',
    icon: 'crown',
    access: 'canAdmin',
    // component: './Admin',
    routes: [
      { path: '/case/manager', name: '用例列表', icon: 'smile', component: './case-manager' },
      { component: './404' },
    ],
  },
  { name: '任务管理', icon: 'table', path: '/task', component: './task-manager' },
  {
    path: '/record',
    name: '任务日志',
    icon: 'crown',
    access: 'canAdmin',
    // component: './Admin',
    routes: [
      { path: '/record/task', name: '用例日志', icon: 'smile', component: './record-manager' },
      { component: './404' },
    ],
  },

  { path: '/', redirect: '/dashboard' },
  { component: './404' },
];
