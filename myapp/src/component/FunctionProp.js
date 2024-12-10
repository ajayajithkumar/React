import React from 'react'

 function FunctionProp(props){
    const {data}=props
    const {name,age,love}=data
  return (
    <ul>
        <li>Name is :{name}</li>
        <li>Age is:{age}</li>
        <li>Love is:{love}</li>
    </ul>
  )
}
export default FunctionProp