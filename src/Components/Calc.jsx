import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, div, mul, sub } from '../Redux/Action'

const Calc = () => {
const dispatch=useDispatch()
const numb=useSelector((store)=>(store.num))
  return (
    <div>

        {numb}<br/>
        {/* ADD HOGA YHA */}
      <button  onClick={()=>{
dispatch(add(2))
      }}>ADD</button><br/>

 {/* SUB HOGA YHA */}
      <button onClick={()=>{
          dispatch(sub(2))
      }}>SUB</button><br/>

 {/* MUL HOGA YHA */}
      <button onClick={()=>{
            dispatch(mul(2))
        }}>MUL</button><br/>


        {/* DIV HOGA YHA */}
      <button
      onClick={()=>{
        dispatch(div(2))
    }}>DIV</button><br/>
    </div>
  )
}

export default Calc
