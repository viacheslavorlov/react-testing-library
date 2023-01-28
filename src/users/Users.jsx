import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Users = () => {
	const [users, setUsers] = useState([]);
	const loadUsers = async () => {
		const response = await axios.get('http://jsonplaceholder.typicode.com/users/')
		setUsers(response.data)
	}

	useEffect(() => {
		loadUsers()

	}, [])
	return (
		<div data-testid={'users-page'}>
			{users.length && users.map(item => <Link
				key={item.id}
				data-testid="user-item"
				to={`/users/${item.id}`}>
				{item.name}
			</Link>)}
		</div>
	);
};

export default Users;
