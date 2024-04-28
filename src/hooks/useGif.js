import React, { useEffect, useState } from 'react';
import axios  from "axios";
import Spinner from '../components/Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    // const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    // const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const [gif,setGif] = useState('car');
    const [loading,setLoading] = useState(false);
    async function fetchData(tag){
      setLoading(true);
      try{  
    //    const {data} = await axios.get(tag ? tagMemeUrl : randomMemeUrl);

       const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imagesSource = data.data.images.downsized_large.url;

        setGif(imagesSource);
        setLoading(false);
      }
      catch(error){
        console.error(error);
      }
    }

    useEffect( () => {
      fetchData("car");
    },[]);
    
    return {gif,loading,fetchData};
}

export default useGif
