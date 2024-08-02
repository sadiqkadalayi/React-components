import React from 'react'

function TextInput(props) {
  return (
    <div className="mb-3">
        <label for="exampleInputEmail1" class="form-label">{props.textName ?? 'Text Name'}</label>
        <input type="text" className="form-control" id="text" required/>
           
    </div>
  )
}

export default TextInput
