
// import { RouteConfig } from 'react-router-config';
import Home from '@/page/demoPage/home'
import DemoPage  from '@/page/demoPage/index'
const demoRouter = [
  {
    path: '/home',
    component: Home,
    name: 'home',
    exact:true
  },
  {
    path: '/demo-page',
    component: DemoPage,
    name: 'demo',
    exact:true
  }
]

export default demoRouter
