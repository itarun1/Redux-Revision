import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'

const Singledet = () => {
  const{id}=useParams()
   const [det,setDet]=({})
   useEffect(()=>{
     get()
   },[])
   const get=()=>{
  axios.get(`http://localhost:2100/users${id}`).then((res)=>{
     setDet(res.data)
  })
   }
  return (
    <div>
     Id:   {det.id} <br />
     Todo: {det.todo} <br />
      Date: {det.date} <br />
    </div>
  )
}

export default Singledet
