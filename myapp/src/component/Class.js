//class component 
import React from 'react'
import Oncl from './onclick'
import './React.css'
import Ter from './Ternary'
class Clas extends React.Component{
    render(){

        const {data}=this.props
        return(
            <div className='classSize'>
                This is a Class component,<h1>{data}</h1>
                <Oncl />
               n
            </div>
        )
    }
}
export default Clas