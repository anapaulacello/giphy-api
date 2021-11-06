import { useEffect, useState } from 'react';
import './App.css';

const apiUrl="https://api.giphy.com/v1/gifs/search?api_key=c6Cq3HTswUHJ3sqLZCZid2s461C78l5L&q=haikyu&limit=25&offset=0&rating=g&lang=en"

function App() {
const [gifs, setGifs]=useState([])
  useEffect(function (){
    fetch(apiUrl)
    .then(res=>res.json())
    .then(response=>{
      const{data}=response
      const gifs=data.map(image=>image.images.downsized_medium.url)
      setGifs(gifs)
    })
  },[])

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map(singleGif=><img src={singleGif}/>)}
      </section>
    </div>
  );
}

export default App;
