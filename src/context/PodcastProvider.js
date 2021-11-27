import React, { useEffect, useState } from 'react';
import MyContext from './index';
import podcasts from '../services/data';

function PodcastProvider({children}) {
  const [data, setData] = useState(podcasts);
  const [api, setApi] = useState([]);
  const [apiEps, setApiEps] = useState();
  const [loading, setLoading] = useState(true);
  const [videoCount, setVideoCount] = useState(12);
  const [inputSearch, setInputSearch] = useState({
    search: '',
  });
  
  
  const {search} = inputSearch;
  
  // TESTANDO API YOUTUBE
  const fetchAPI = async () => {
    // const apiKey = 'AIzaSyBGdxRVYAOJ-tEilrfkHITYYMF8YPv0two';
    const apiKey = 'AIzaSyD0RJ1lLDFbKLwcbwWEF4DSMhs66K9fs5I';

    const idChannel = 'UCJUxZPUsAvX_jFZNYAST0yg'
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&channelId=${idChannel}&maxResults=${videoCount}&order=date`
    const fetchApi  = await fetch(url);
    const data = await fetchApi.json();
    setApi(data.items);
    setLoading(false);
  }

  // const fetchEps = async (nextPageToken) => {
  //   const API_KEY = 'AIzaSyC727DPAuoxAwd9vlZQlW_gmUjKjQBGeks';
  //   // const API_KEY = 'AIzaSyD0RJ1lLDFbKLwcbwWEF4DSMhs66K9fs5I';

  //   const idChannel = 'UCJUxZPUsAvX_jFZNYAST0yg'
  //   const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&channelId=${idChannel}&maxResults=${maxResults}&pageToken=${nextPageToken}&order=date`
  //   const fetchApi  = await fetch(url);
  //   const data = await fetchApi.json();
  //   setApiEps(data.items);
  //   setLoading(false);
  // }
  
  useEffect(() => {
    setTimeout(() => {
      fetchAPI();
    }, 1500)
  },[])
  
  // useEffect(() => {
  //   fetchEps();
  // },[])
  
  const getPodcast = () => {
    const resultInput = api.filter((card) => card.snippet.title.toLowerCase().includes(search.toLowerCase()));
    return resultInput;
  }

    return (
      <MyContext.Provider value={{data, setData, inputSearch, setInputSearch, api, loading, apiEps, getPodcast, setVideoCount}}>
        {children}
      </MyContext.Provider>
  );
}

export default PodcastProvider;
