import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UsersForm from './components/UsersForm';

function App() {

  //States
  const [ users, setUsers ] = useState([]);
  const [ userSelect, setUserSelect ] = useState(null);


  // API call and useEffect
  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then((res) => setUsers(res.data))
  }, [])

  // getUser function for form and transfer through props
  const  getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }

  // Delete users function 
  const deleteUser = (id) => {
    const filterDelete = users.filter( user => user.id !== id )
    setUsers(filterDelete);
  }

  const selectU = (users ) => setUserSelect(users)

  // console.log(userSelect);

  return (
    <div className="App">
      < UsersForm 
          getUsers={getUsers} 
          userSelect={userSelect} 
          setUserSelect={setUserSelect}
          selectU={selectU}
      />
      
      < UserList 
          users={users} 
          setUserSelect={setUserSelect}
          deleteUser={deleteUser}
        />
      
    </div>
  );
}

export default App;
