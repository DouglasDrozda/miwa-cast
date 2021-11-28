import React, { useEffect, useState } from 'react';
import MyContext from './index';
import podcasts from '../services/data';

function PodcastProvider({children}) {
  const [data, setData] = useState(podcasts);
  const [api, setApi] = useState([]);
  const [firtsCards, setFirtsCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputSearch, setInputSearch] = useState({
    search: '',
  });
  
  
  const {search} = inputSearch;
  
  // TESTANDO API YOUTUBE
  const fetchAPI = async () => {
    // const apiKey = 'AIzaSyBGdxRVYAOJ-tEilrfkHITYYMF8YPv0two';
    const apiKey = 'AIzaSyC727DPAuoxAwd9vlZQlW_gmUjKjQBGeks';

    const idChannel = 'UCJUxZPUsAvX_jFZNYAST0yg'
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&channelId=${idChannel}&maxResults=50&order=date`
    const fetchApi  = await fetch(url);
    const data = await fetchApi.json();
    setApi(data.items);
    data.items.map((card, index) => {
      if (index <= 12) {
        setFirtsCards(card);
      }
      return null;
    })
    setLoading(false);
  }



  // const fetchEps = async () => {
  //   // const API_KEY = 'AIzaSyBGdxRVYAOJ-tEilrfkHITYYMF8YPv0two';
  //   const API_KEY = 'AIzaSyD0RJ1lLDFbKLwcbwWEF4DSMhs66K9fs5I';
  //   const idChannel = 'UCJUxZPUsAvX_jFZNYAST0yg'
  //   const url = `https://www.googleapis.com/youtube/v3/search?&key=${API_KEY}&part=snippet&type=video&channelId=${idChannel}&maxResults=${videoCount}&pageToken=CAUQAA&order=date`
  //   const fetchApi  = await fetch(url);
  //   const data = await fetchApi.json();
  //   return data.items;
  // }
  
  useEffect(() => {
    setTimeout(() => {
      fetchAPI();
    }, 1000)
  },[])
  
  const getPodcast = () => {
    const resultInput = api.filter((card) => card.snippet.title.toLowerCase().includes(search.toLowerCase()));
    return resultInput;
  }

    return (
      <MyContext.Provider value={{data, setData, inputSearch, setInputSearch, api, loading, getPodcast, firtsCards}}>
        {children}
      </MyContext.Provider>
  );
}

export default PodcastProvider;
