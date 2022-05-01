import React,{useState} from 'react'
import Button from './UI/Button'
export default function TicTacToe() {
const [value,setValue]=useState("")
const [ontoggle,setontoggle]=useState(false)
const [allvalue,setAllvalue]=useState([])
const [arr ,setArr]=useState([false,false,false,false,false,false,false,false,false])
const [test,setTest]=useState(['','','','','','','','',''])

const handleClick=(value,myindex)=>{
  
    const test1=[...test];
    test1[myindex] = arr[myindex]?"X":'O';
    const temp = [...arr];
    temp[myindex] = !temp[myindex];
    setArr(temp);
    setTest(test1)
   
}
  return (
    <div className='tictac'>

  <div className='allbutton-ui'>
  {arr.map((arr,i)=>{
      return (
          <div>
   <Button handleClick={handleClick} myindex={i} ontoggle={ontoggle}  value={test[i]}/>

          </div>
      )
  })}
  </div>

    </div>
  )
}
