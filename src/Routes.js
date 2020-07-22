import Home from './containers/Home';
import Login from './containers/Login';

export default (
  [
    {
      path: '/',
      exact: true,
      component: Home,
      key: 'home',
      loadData: Home.loadData
    },
    {
      path: '/login',
      exact: true,
      key: 'login',
      component: Login,
    }
  ]
  // <div>
  //   <Route path="/" exact component={Home}></Route>
  //   <Route path="/login" exact component={Login}></Route>
  // </div>
);