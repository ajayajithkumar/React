import React from 'react'

function StudentDetail() {
  return (
    <div className='stu'><h1>StudentDetail</h1>
      <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, pariatur! Corporis ex, natus adipisci aspernatur dolorem maiores saepe eius molestias veniam, maxime voluptates rerum alias. Tenetur dignissimos pariatur distinctio voluptate.</h3>
      <div className='commonDiv'>
        <center><input type='text' placeholder='Enter Name' /><br></br>
          <input type='password' placeholder='Enter Pass' />
          <br></br>
          <button>Submit</button>
        </center>
      </div>
    </div>
  )
}
export default StudentDetail