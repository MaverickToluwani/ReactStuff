import React from 'react'
import axios from "axios"
import {useState, useEffect} from "react"
import NavBar from '../Components/NavBar';

export const Users = () => {

    const [users, setUsers] = useState([]);
    const [loading, setloading] = useState(false);

    const getUsers = async () => {
        try{
        const response = await axios.get("https://randomuser.me/api/");

        // let counter = 0
        
        setUsers(response.data.results)
        console.log(users);
        }
        catch(e){
            console.log(e)
        }
    }
    useEffect(() => {
        getUsers()
    }, []);

    // getUsers();

  return (
    <div className="flex flex-col gap-5">
        <NavBar/>
        <div className='grid grid-cols-1  p-8 sm:grid-cols-2 md:grid-cols-3 
        lg:grid-cols-4'>

            {
                users.map((user, index) => {
                    return (
                        <div key={index} className="shadow-md rounded-lg p-4 bg-white flex flex-col items-center text-center">
                            <img src={user.picture.medium} alt="User Avatar" className="w-20 h-20 rounded-full mb-3" />
                            <ul className="list-none space-y-1 text-gray-700">
                                <li className="text-lg font-semibold">{user.name.title} {user.name.first} {user.name.last}</li>
                                <li className="text-sm text-gray-500 capitalize">{user.gender}</li>
                            </ul>
                        </div>

                    )
                })
            }
        </div>
    </div>
  )
}
