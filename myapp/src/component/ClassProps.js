import React from 'react'
import './React.css'
class ClasProp extends React.Component {
    render(){
        const {data}=this.props
        const {name,age,love}=data
  return (
    <div className='classSize'>
   
    <ul>
        <li>Name:{name}</li>
        <li>Age{age}</li>
        <li>love:{love}</li>
    </ul>
    </div>
  )
    }
}
export default ClasProp
