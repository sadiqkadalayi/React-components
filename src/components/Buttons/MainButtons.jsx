import React from 'react'

function MainButtons(props) {
  
  return (
    <button type="submit" className="btn btn-primary">{props.label ?? 'click me..'}</button>
  )
}

export default MainButtons
