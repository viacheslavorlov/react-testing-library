import {useEffect, useState} from 'react';
import axios from "axios";
import SingleUserE2E from "./SIngleUserE2E";

const UsersForE2E = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const loadUsers = async () => {
        await setIsLoading(true);
        const response = await axios.get('http://jsonplaceholder.typicode.com/users')
        await setUsers(response.data)

        setIsLoading(false);
    }

    const onDelete = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

    useEffect(() => {
        loadUsers()

    }, [])
    return (
        <div>
            {isLoading && <h1 id="user-loading">Загрузка...</h1>}
            {users.length && <div id={'users-list'}>
                {users.map(user => <SingleUserE2E onDelete={onDelete} user={user}/>)}
            </div>}
        </div>
    );
};

export default UsersForE2E;
