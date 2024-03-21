import React from 'react'
import Post from './post'

function Posts() {
  return (
    <div className='posts'>
      <div className='popularposts'>Popular Posts</div>
      <div>
        <Post 
        image = 'https://www.w3schools.com/w3images/workshop.jpg'
        p1 = 'Lorem'
        p2 = 'Sed mattis nunc'

        />
        <Post 
        image = 'https://www.w3schools.com/w3images/gondol.jpg'
        p1 = 'Ipsum'
        p2 = 'Praes tinci sed'
        
        />
        <Post 
        image = 'https://www.w3schools.com/w3images/skies.jpg'
        p1 = 'Dorum'
        p2 = 'Ultricies congue'
        
        />
        <Post 
        image = 'https://www.w3schools.com/w3images/rock.jpg'
        p1 = 'Mingsum'
        p2 = 'lorem ipsum dipsum'
        
        />
      </div>
    </div>
  )
}

export default Posts
