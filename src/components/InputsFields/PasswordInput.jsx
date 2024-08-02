import React from 'react'

function PasswordInput(props) {
  return (
    <div className="mb-3">
        <label for="exampleInputPassword1" class="form-label">{props.passName ?? 'password :'}</label>
        <input type="password" className="form-control" id="exampleInputPassword1" required/>
    </div>
  )
}

export default PasswordInput
