import React,{useState} from 'react'
import Button from './UI/Button'
export default function TicTacToe() {
const [value,setValue]=useState("")
const [ontoggle,setontoggle]=useState(false)
const [allvalue,setAllvalue]=useState([])


const handleClick=(value)=>{
   if(value===''){
    setontoggle(true)
    setValue("X")
    setAllvalue([...allvalue,value])
   }else if(value==='X'){
    setontoggle(true)
    setValue("0")
    setAllvalue([...allvalue,value])
   }else if(value==='0'){
    setontoggle(true)
    setValue("X")
    setAllvalue([...allvalue,value])
   }
}
  return (
    <div className='tictac'>

  <div className='allbutton-ui'>
  <Button handleClick={handleClick} ontoggle={ontoggle}  value={ontoggle ? value:''}/>
   <Button handleClick={handleClick} ontoggle={ontoggle}  value={ontoggle ? value:''}/>
   <Button handleClick={handleClick} ontoggle={ontoggle}  value={ontoggle ? value:''}/>
   <Button handleClick={handleClick} ontoggle={ontoggle}  value={ontoggle ? value:''}/>
   <Button handleClick={handleClick} ontoggle={ontoggle}  value={ontoggle ? value:''}/>
   <Button handleClick={handleClick} ontoggle={ontoggle}  value={ontoggle ? value:''}/>
   <Button handleClick={handleClick} ontoggle={ontoggle}  value={ontoggle ? value:''}/>
   <Button handleClick={handleClick} ontoggle={ontoggle}  value={ontoggle ? value:''}/>
   <Button handleClick={handleClick} ontoggle={ontoggle}  value={ontoggle ? value:''}/>
  </div>

    </div>
  )
}
