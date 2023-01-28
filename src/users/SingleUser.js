import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const SingleUser = () => {
	const [user, setUser] = useState(null);
	const {id} = useParams()
	const userData = async () => {
		const response = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
		setUser(response.data)
	}

	useEffect(() => {
		userData()
	}, [id])

	return (
		<>
			<h1 data-testid='single-user-item'>User detaild page</h1>
			{user &&
				<div key={id}>
					{id} {user.name}
				</div>}

		</>)

};

export default SingleUser;
