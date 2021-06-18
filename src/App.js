import React, { Suspense,lazy } from 'react'
import './App.scss'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Store from './store'
import { Provider } from 'react-redux'


const Login = lazy(() => import('@views/Login/Login.jsx'));
const Main = lazy(() => import('@views/Main/Index.jsx'));
const Dashboard = lazy(() => import('@views/Dashboard/Index.jsx'));
const BasicsForm = lazy(() => import('@views/Forms/BasicsForm.jsx'));
const SeniorForm = lazy(() => import('@views/Forms/SeniorForm.jsx'));
const TableList = lazy(() => import('@views/Tables/Index.jsx'));
export const AppRoutes = () => {
	return (
		<Provider store={Store}>
			<Router>
				<Suspense fallback={<div></div>}>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route path="/login" component={Login} />
						<AuthRoute path="/main" component={Main} />
					</Switch>
				</Suspense>
			</Router>
		</Provider>
	);
};


export const MainRoutes = () => {
	return (
		<Provider store={Store}>
			<Suspense fallback={<div></div>}>
				<Switch>
					<Redirect exact from="/main" to="/main/dashboard" />
					<Route exact path="/main/dashboard" component={Dashboard} />
					<Route exact path="/main/forms/basicsForm" component={BasicsForm} />
					<Route exact path="/main/forms/seniorForm" component={SeniorForm} />
					<Route exact path="/main/table" component={TableList} />
				</Switch>
				</Suspense>
		</Provider>
	);
};



export const checkAuth = () => {
    return !!localStorage.getItem('ms_username');
}

// 路由登录鉴权
const AuthRoute = ({ component: Component, ...rest }) => {
	return (

		<Route
			{...rest}
			render={(props) =>
				// checkAuth 方法判断是否已登录
			checkAuth () ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
};
