const SingleUserE2E = ({user, onDelete}) => {
    return (
        <div className="SingleUserE2E">
            {user.name}
            <button className="user-delete" onClick={() => onDelete(user.id)}>delete</button>
        </div>)

};

export default SingleUserE2E;
