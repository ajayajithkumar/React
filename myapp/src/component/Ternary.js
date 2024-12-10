import React from 'react'
import Cls from './Class'
function Ter() {
    const ak="Ajay"
  return (
    <>
    {ak!==undefined ?<Cls data={ak}/>:"not working"}
    </>
  )
}
export default Ter