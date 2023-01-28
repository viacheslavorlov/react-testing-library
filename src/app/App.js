import './App.css';
import Users from "../users/Users";
import ToggleComponent from "../toggle-component/ToogleComponent";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import SingleUser from "../users/SingleUser";
import AppRouter from "../routes/AppRouter";
import Navbar from "./navbar/Navbar";

function App() {


	return (
		<div className="App">
			<Navbar/>
			<AppRouter/>
		</div>
	);
}

export default App;
