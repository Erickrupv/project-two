import { getGifs } from "../helpers/getGifs";
import { useEffect } from "react";
import GifItem from "./GifItem";
import { useState } from "react";


export function GifGrid({ category }) {
  
  const [images, setImages] = useState([])

  const getImages = async () => {
   const images = await getGifs(category);
   setImages(images);
   console.log('!!!!!', images[0].title) 
  }
  useEffect( () => {
    getImages();
  }, [ ]) ;


  return (
    <>
     <ol>
      {images.map(({id, title}) => ( 
        <GifItem /> 
      ) )} 
     </ol>
    </>
  );
}
