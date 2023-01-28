import React, {useEffect, useState} from 'react';

const ToggleComponent = () => {
	const [data, setData] = useState(null);
	const [toggle, setToggle] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const toggleClick = () => setToggle(prevState => !prevState)

	const inputHandler = (e) => {
		setInputValue(e.target.value)
	}

	useEffect(() => {
		setTimeout( () => {
			setData({})
		}, 100)
	}, []);
	return (
		<div>
			{toggle && <div  data-testid={"toggle-element"}>toggle</div>}
			{data && <div style={toggle ? {color: 'red'} : {color: "blueviolet"}}>data</div>}
			<h1>Hello world</h1>
			<input onChange={e => inputHandler(e)} type="text" placeholder={"...input text..."}/>
			<h2 data-testid={"input-value"}>{inputValue}</h2>
			<br/>
			<button data-testid={"toggle-btn"} onClick={toggleClick}>Click!</button>
		</div>
	);
};

export default ToggleComponent;
