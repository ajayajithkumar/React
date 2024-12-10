import React from 'react'

function Li(){

    const Arr=[
        {name:"Ajay",age:21,course:'fullstack'},
        {name:"shaji",age:23,course:'fullstack'},
        {name:"soundar",age:20,course:'cloud'}
    ]
  return (
    <ul>
        {Arr.map((e)=>{
            return  <li >{e.name},{e.age},{e.course}</li>
        })}
    </ul>
  )
}
export default Li   