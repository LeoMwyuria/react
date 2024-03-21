import React from 'react'

function Header(header) {
  return (
    <div className={header.class}>
        <p className={header.class1}>{header.text1}</p>
        <span className={header.class2}>{header.text2}</span>
        <span className={header.class3}>{header.text3}</span>
      
    </div>
  )
}

export default Header
