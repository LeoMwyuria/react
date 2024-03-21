import React from 'react'

function Card2(card2) {
  return (
    <div className='card2'>
        <img src={card2.image}/>
        <p className={card2.class1}>{card2.p1}</p>
        <p className={card2.class2}>{card2.p2}</p>
        
      
    </div>
  )
}

export default Card2
