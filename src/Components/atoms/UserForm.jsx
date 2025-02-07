import React from 'react'

export const  UserForm = ({handleSubmit, name, setName, age, 
    setAge, description, setDescription}) => {
  return (
    <form action="" className="formClass" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input className='border border-black' name="name" 
                type="text" 
                placeholder="Enter your name" 
                value={name}
                onChange={(e) => {
                    // console.log(e);
                    setName(e.target.value)
                }}/>
            </div>
            <div className="form-group">
                <label htmlFor="age">Age</label>
                <input className='border border-black' name="age" type="number" 
                placeholder="Enter your age"
                value={age}
                onChange={(e) => {
                    setAge(e.target.value)}
                }
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea className='border border-black' name="description" row={5}
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value)}}
                    />
            </div>
            <button className="btn" type="submit">submit</button>
        </form>
  )
}

