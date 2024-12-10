//function component
import React from 'react'
import './React.css'
import Clas from './Class'
import Func from './FunctionProp'
import ClasProp from './ClassProps'
function Com1(){
    const data={name:'Ajay',age:21,love:'Ak'}
    return(
        <>
    <div className="color size">
        this page is write for practice
    </div>
    <div className='size color'>
        hi guys
    </div>
    <Clas />
    <Func data={data}/>
    <ClasProp data={data}/>
    </>
    )
}
export default Com1