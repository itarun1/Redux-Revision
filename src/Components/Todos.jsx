import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, delTodo } from '../Redux/Action'

const Todos = () => {
    const dispatch=useDispatch()
    const todos=useSelector((store)=>(store.todo))
    useEffect(()=>{
    getData()
    },[])
    // we r fetching data using this function
    const getData=()=>{
        axios.get("http://localhost:2100/users").then((res)=>{
        dispatch(addTodo(res.data))
        })
    }
    

    const handleDelete=(id)=>{
      axios.delete(`http://localhost:2100/users/${id}`).then(()=>{
          dispatch(delTodo(id))
          getData()
      })
    }

//     const listItems = this.props.MyState.items.map((item) =>
//   <li key={item.name} onClick=event => this.props.deleteItem(event, item) >{item.name}</li>
// );

  return (
    <div>
          {
              todos.map((e)=>{
                  return <div key={e.id}>{e.todo}
                  <button onClick={()=>{
                      handleDelete(e.id)
                  }}>Delete</button></div>
              })
          }
    </div>
  )
}

export default Todos
