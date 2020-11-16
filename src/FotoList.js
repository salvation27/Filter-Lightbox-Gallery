import React,{useEffect, useState} from 'react'
import FotoCard from './FotoCard'
import { SRLWrapper } from "simple-react-lightbox";
import images from './data'



// опции для лайт бокса

const optionsLightBox = {
  settings:{
    autoplaySpeed: 3000,
    disableKeyboardControls: false,
    disablePanzoom: false,
    disableWheelControls: false,
    hideControlsAfter: 3000,
    lightboxTransitionSpeed: 0.3,
    lightboxTransitionTimingFunction: 'linear',
    overlayColor: 'rgba(0, 0, 0, 0.9)',
    slideAnimationType: 'fade',
    slideSpringValues: [300, 200],
    slideTransitionSpeed: 0.3,
    slideTransitionTimingFunction: 'linear'
  },
  caption: {
    captionColor: "#a6cfa5",
    captionFontFamily: "Raleway, sans-serif",
    captionFontWeight: "300",
    captionTextTransform: "uppercase",
  }
}

// описание для картинок 

const customCaptions = images.map((item,i) =>{
  return(
    { id: i, caption: item.text }
  )
})

// рендер кнопок фильтрации
const btns =[
  {name:'all'},
  {name:'agressive'},
  {name:'smile'},
]

export default function FotoList({images}) {


  
  const[tag,setTag] = useState('all')
  const[filterImages,setFilterImages] = useState([])

  useEffect(
    ()=>{
      tag === 'all' ? setFilterImages(images): setFilterImages(images.filter(image=>image.tag === tag ))
  },[tag])
  return (
    <div className='foto'>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="foto_btn">
              {
                  btns.map((btn,i)=><TagButton key={i} name={btn.name} handleSetTag={setTag} tegActive ={tag === `${btn.name}` ? true:false }  />)
              }
           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <SRLWrapper options={optionsLightBox} customCaptions={customCaptions}>
            <div className="foto_wrap">
              {
                filterImages.map(image =>{
                  return <FotoCard image={image} key ={image.id} />
                })
              }
            </div>
            </SRLWrapper>
          </div>
        </div>
      </div>
    </div>
  )
}


const TagButton = ({name,handleSetTag,tegActive}) => 
{
    return <div className={`tag ${tegActive ? 'active': ''}`} onClick={()=>handleSetTag(name)}>{name.toUpperCase()}</div>
}