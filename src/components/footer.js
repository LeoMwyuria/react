import React from 'react'
import Footerbutton from './footerbutton'

function Footer(Footer) {
  return (
    <div className='footer'>
      <br/>
      <Footerbutton 
      text = 'previous'

      />
      <Footerbutton 
      text= 'next »'

      />
      
      <p className='footerp'>Powered by w3.css</p>

      
    </div>
  )
}

export default Footer
