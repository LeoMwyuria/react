import React from 'react'

function Card(card) {
  return (
    <div className= {card.class}>
        <img className='image' src = {card.image}/>
        <p className={card.class1}>{card.p1}</p>
        <p className={card.class2}>{card.p2}</p>
        <p className={card.class3}>{card.p3}</p>
        <div className='cardfooter'>
            <button className='readmore'>READ MORE » </button>
            <div className='comment'>
                <span>Comments</span>
                <span className='commentcount'>{card.comments}</span>
            </div>
        </div>
        <br></br>
      
    </div>

    

    
  )
}

export default Card
