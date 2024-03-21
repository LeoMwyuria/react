import React from 'react'

function Footerbutton(footerbtn) {
  return (
    <div className='buttondiv'>
      <button className='footerbutton'>{footerbtn.text}</button>
    </div>
  )
}

export default Footerbutton
