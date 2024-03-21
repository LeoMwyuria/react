import React from 'react'
import Card from './card'
import Card2 from './card2'
import Posts from './posts'
import Tags from './tags'

function Maindiv(main) {
  return (
    <div className= {main.class}>
        <div className='main1'>
            <Card
            class = 'card'
            image = 'https://www.w3schools.com/w3images/woods.jpg'
            class1 = 'title1'
            class2 = 'title2'
            class3 = 'title3'
            p1 = 'TITLE HEADING'
            p2 = 'Title description, April 7, 2014'
            p3 = 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.'
            comments = '0'



             />
             <br></br>
             <Card
            class = 'card'
            image = 'https://www.w3schools.com/w3images/bridge.jpg'
            class1 = 'title1'
            class2 = 'title2'
            class3 = 'title3'
            p1 = 'BLOG ENTRY'
            p2 = 'Title description, April 2, 2014'
            p3 = 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.'
            comments = '2'



             />
        
        </div>
        <div className='main2'>
          <Card2
          image = 'https://www.w3schools.com/w3images/avatar_g.jpg'
          class1 ='Title1'
          class2 ='Title2'
          p1 = 'My Name'
          p2 = 'Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.'
          />
          <br/><br/>
          <Posts/>
          <br/><br/>
         <Tags />
          
          
        </div>
        <div></div>
        
      
    </div>
  )
}

export default Maindiv
