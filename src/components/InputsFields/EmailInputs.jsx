import React from 'react'

function EmailInputs() {
  return (
    <div className="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address :</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
           
    </div>
  )
}

export default EmailInputs
