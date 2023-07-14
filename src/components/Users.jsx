import Useritem from './Useritem';

const Users = ({users}) => {
    return (
        users.map((user) => (
            <Useritem user={user} key={user.id} />
        ))
    );     
}

export default Users;
