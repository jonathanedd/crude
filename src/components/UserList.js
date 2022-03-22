import React from 'react';


const UserList = ({users, setUserSelect, deleteUser}) => {


    // const [ showForm , setShowForm ] = useState(false)
    return (
        <ul>
            

            {
                users.map(user => (
                    
                    <li key={user.id}>

                        

                        <h3> <b>Name: </b> {user.first_name} {user.last_name} </h3>
                        <p> <b>Email: </b> {user.email}</p>
                        <p><b>Birth-date: </b> {user.birthday} </p>
                        

                        <button className='edit' onClick={() => setUserSelect(user)}>
                            Edit
                        </button>

                        <button className='delete' onClick={() => deleteUser(user.id)}>
                            delete
                        </button>
                    </li>
                ))
            } 

        </ul>
    );
};

export default UserList;