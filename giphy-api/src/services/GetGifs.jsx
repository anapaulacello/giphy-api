import React from 'react'
const apiKey="c6Cq3HTswUHJ3sqLZCZid2s461C78l5L"


function GetGifs({keyword}) {
    const apiUrl=`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=e`

    return fetch(apiUrl)
    .then(res=>res.json())
    .then(response=>{
      const{data}=response
      const gifs=data.map(image=>{
          const{images,title,id}=image
          const {url}=images.downsized_medium
          return {title,id,url} 
      })
      return gifs 
    })
}

export default GetGifs
