import React from 'react'
import './newsitem.css'



const NewsItem = ({ title, description, url, urlToImage}) => {
   
  return (
  
    <div class="max-w-sm rounded overflow-hidden shadow-lg inline-block justify-center flex-wrap mt-5 m-10" style={{height:'600px'}}>
      <img class="w-full h-3/6" src={urlToImage} alt={urlToImage}/>
      <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2"><a href={url}>{title}</a></div>
      <p class="text-gray-700 text-base">
      {description}
      </p>
      </div>
   </div>

      
 
  )
}

export default NewsItem
