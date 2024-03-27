import React from 'react'

function Alert(props) {

  return (
    <div className='w-50 bg-red'>
      {
      // props.alert && 
      // <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <div className="alert alert-success alert-dismissible fade show" role="alert">
            <h4 className="h4 text-center">
              {/* {props.alert.message} */}
              HIIIII</h4>
            <button type="button" className="btn-close" data-bs-dismiss={`alert alert-success alert-dismissible fade show`} aria-label="Close"></button>
        </div> }
    </div>
  )
}

export default Alert
