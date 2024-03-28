import React from 'react'

function Alert(props) {

  return (
    <div className='w-100 position-relative'>
      { props.alert &&  <div className={`position-absolute start-50 translateX(-50%) alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <h4 className="h4 text-center">{props.alert.message} </h4>
            <button type="button" className="btn-close" data-bs-dismiss={`alert alert-${props.alert.type} alert-dismissible fade show`} aria-label="Close"></button>
        </div> }
    </div>
  )
}

export default Alert
