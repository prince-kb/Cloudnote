import React from 'react'
function Contact() {
  return (
    <div className='my-4 container'>
      <h1 className="h1">CONTACT</h1>
      <h2 className="h2">Contact me from ---</h2>
      <ul>
      <li><details>princejhajha750@gmail.com<summary>MAIL ME AT : </summary></details></li>
      <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/prince-kumar-barnwal-775b99227">LinkedIN</a></li>          
      </ul>
      <h2 className="h2">Visit me at ---</h2>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/prince-kumar-barnwal-775b99227">LinkedIN</a></li>          
        <li><a target="_blank" rel="noreferrer" href="https://github.com/prince-kb">GITHUB</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://google.com">PORTFOLIO</a></li>
      </ul>
    </div>
  )
}

export default Contact
