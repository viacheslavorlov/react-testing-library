import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import ToggleComponent from "../toggle-component/ToogleComponent";
import Users from "../users/Users";
import SingleUser from "../users/SingleUser";
import ErrorPage from "../pages/ErrorPage";
import {Counter} from "../Counter/Counter";
import HelloWorldE2E from "../pages/HelloWorld";
import UsersForE2E from "../users/UsersForE2E";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<MainPage/>}/>
			<Route path="/about" element={<AboutPage/>}/>
			<Route path="/toogle" element={<ToggleComponent/>}/>
			<Route path="/users" element={<Users/>}/>
			<Route path="/users/:id" element={<SingleUser/>}/>
			<Route path="/counter" element={<Counter/>}/>
			<Route path="/hello" element={<HelloWorldE2E/>}/>
			<Route path="/users-e2e" element={<UsersForE2E/>}/>
			<Route path="/*" element={<ErrorPage/>}/>
		</Routes>
	);
};

export default AppRouter;
