import React from 'react'
import { useEffect, useState } from 'react';
import Gif from './Gif'
import GetGifs from "../services/GetGifs"

export const ListofGifs = ({params}) => {
    console.log(params)
    const {keyword}=params
    const [gifs, setGifs]=useState([])
    useEffect(function (){
    GetGifs({keyword}).then(gifs=> setGifs(gifs))
    },[keyword])
    return <>
        {gifs.map(({title,url})=>
        <Gif 
        key={title} 
        title={title} 
        url={url}>
        </Gif>
        )}
    </>
}
