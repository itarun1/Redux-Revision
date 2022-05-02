import React, { useState } from 'react'
import axios from "axios"
const Todo = () => {
   const [data,setData]=useState({
   todo:"",
   date:""
   })
//    yha Pe Submit vala poore code hai
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:2100/users`,data).then(()=>{
            alert("Data Added Succesfully")
        })
    }
// Yaha pe value add hogi data main
    const handleChange=(e)=>
    {
      const{id,value}=e.target
     setData({...data,[id]:value})
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id='todo'  type="text" placeholder='Enter todo' onChange={handleChange} />
        <input id='date' type="date" placeholder='Enter Date' onChange={handleChange}/>
         <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Todo
