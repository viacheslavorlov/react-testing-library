import './App.css';
import {useEffect, useState} from "react";

function App() {
	const [data, setData] = useState(null);
	const [toggle, setToggle] = useState(false);

	const toggleClick = () => setToggle(prevState => !prevState)

	useEffect(() => {
		setTimeout( () => {
			setData({})
		}, 100)
	}, []);

	return (
		<div className="App">
			{toggle && <div  data-testid={"toggle-element"}>toggle</div>}
			{data && <div style={toggle ? {color: 'red'} : {color: "blueviolet"}}>data</div>}
            <h1>Hello world</h1>
            <input type="text" placeholder={"...input text..."}/>
            <br/>
            <button data-testid={"toggle-btn"} onClick={toggleClick}>Click!</button>
		</div>
	);
}

export default App;
