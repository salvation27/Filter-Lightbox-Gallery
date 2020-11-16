import React from 'react'


export default function FotoCard({image}) {
  return (
    
      <div className='img_card'>
        <a href={image.imgName}>
           <img src={image.imgName} alt=""/>
        </a>
      </div>
    
  )
}
