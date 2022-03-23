import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersForm = ({ getUsers, userSelect, setUserSelect, selectU }) => {

    // States inputs control (POST)
    const [ email, setEmail ] = useState("email");
    const [ password, setPassword ] = useState('password');
    const [ firstName, setFirstName ] = useState('first name');
    const [ lastName, setLastName ] = useState('last name');
    const [ birthday, setBirthday ] = useState('');

    // const [ showForm , setShowForm ] = useState(false)

    

    
    const setStates = () => {
        getUsers();
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setBirthday('');
    }



    useEffect(() => {
        if(userSelect){
            setEmail(userSelect.email);
            setPassword(userSelect.password);
            setFirstName(userSelect.first_name);
            setLastName(userSelect.last_name);
            setBirthday(userSelect.birthday)
        }else{
            setStates()
        }
        
    }, [userSelect, setStates() ])

    // console.log(userSelect);

    const submit = (e) => {
        e.preventDefault()
        const user = {
            email,
            password,
            first_name: firstName,
            last_name: lastName,
            birthday
        }
        if(userSelect){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelect.id}/`, user)
                .then(() => {
                    getUsers()
                    setUserSelect(null)
                })
        }else{
            //POST petition 
            axios.post('https://users-crud1.herokuapp.com/users/', user )
            .then( () =>{ 
                setStates()
            });
        }
        
        
    }

    return (
        
        <form onSubmit={submit}> 

            
                    <h1>Form</h1>


                    <div className='input-container'>
                        <label htmlFor="first-name">First name</label>
                        <input 
                            type="text"
                            onChange={ e => setFirstName(e.target.value)}
                            value={firstName} 
                        />
                    </div>


                    <div className='input-container'>
                        <label htmlFor="last-name">Last name</label>
                        <input 
                            type="text"
                            onChange={ e => setLastName(e.target.value)}
                            value={lastName} 
                        />
                    </div>


                    <div className='input-container'>
                        <label htmlFor="birthday">Birth-date</label>
                        <input 
                            type="date"
                            onChange={ e => setBirthday(e.target.value)}
                            value={birthday} 
                        />
                    </div>


             
                    <div className='input-container'>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            onChange={ e => setEmail(e.target.value)}
                            value={email} 
                        />
                    </div>

                    
             
            

            
                    <div className='input-container'>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            onChange={ e => setPassword(e.target.value)}
                            value={password} 
                        />
                    </div>
              

            
                    <button className='submit-button'>Submit</button>
                   
       
                    {
                        userSelect && (
                            <button className='cancel-button'
                                type='button' onClick={() => selectU(null)}> 
                                Cancel
                            </button>
                    )}

        </form>
        
    );
};

export default UsersForm;