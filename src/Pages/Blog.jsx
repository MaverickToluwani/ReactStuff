import React, { useState } from 'react'
import UserCard from '../Components/atoms/UserCard';
import {UserForm}  from '../Components/atoms/UserForm';

export const Blog = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [description, setDescription] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

  return (
    <div className="formContainer">
        {
            formSubmitted === false ? 
            <UserForm handleSubmit={handleSubmit} name={name} age={age} description={description}
            setName={setName} setAge={setAge} setDescription={setDescription}/>
            :
        <UserCard userName={name} userAge={age} userDescription={description}/>
        }
    </div>
  )
}
