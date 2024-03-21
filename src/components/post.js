import React from 'react'

function Post(post) {
  return (
    <div className='grid-container'>
        <div><img className='grid-pic' src={post.image} /></div>
        <div>
            <p>{post.p1}</p>
            <p>{post.p2}</p>
        </div>

      
    </div>
  )
}

export default Post
