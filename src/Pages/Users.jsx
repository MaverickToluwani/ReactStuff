import React from 'react'
import axios from "axios"
import {useState, useEffect} from "react"
import NavBar from '../Components/NavBar';
import LoadingImages from '../Components/LoadingImages';
import UsersLists from '../Components/UsersLists';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [gender, setGender] = useState('');
    const handleChange = (e) =>{setGender(e.target.value)}
  
    const getUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://randomuser.me/api/?results=10${gender === 'all' ? "" : `&gender=${gender}`}`);
        if (response.data.results.length > 0) {
          setUsers(response.data.results);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getUsers();
    }, [gender]);
  
    return (
      <div className="flex flex-col items-center w-full">
        <NavBar/>
        <select onChange={handleChange} className='w-fit my-5 border p-3 rounded-lg'>
          <option value='all'>All Users</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
        {loading ? ( 
          <LoadingImages/>
        ) : (
          <UsersLists users={users}/>
        )}
      </div>
    );
  };
  
  export default Users;