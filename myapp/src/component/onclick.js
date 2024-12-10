import React from 'react'

function Onclick() {
    const click=()=>{
        alert('great you are clicked right button')
    }
  return (
    <>
    <button onClick={click}>Click Me</button>
    </>
  )
}
export default Onclick
