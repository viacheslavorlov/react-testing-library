import React, {useState} from 'react';

const HelloWorldE2E = () => {
	const [state, setState] = useState('');
	const [visible, setVisible] = useState(false);

	const toggle = () => {
		state === 'hello' && setVisible(prevState => !prevState)
	}

	const onchange = (e) => {
		setState(e.target.value)
	}

	return (
		<div>
			<input id="search" type="text" value={state} onChange={e =>onchange(e)}/>
			<button id="toggle" onClick={toggle}>HELLO WORLD</button>
			{visible && <h1 id="hello">HELLO WORLD</h1>}
		</div>
	);
};

export default HelloWorldE2E;
