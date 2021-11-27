import React, { useEffect, useState } from 'react';
import MyContext from './index';
import podcasts from '../services/data';

function PodcastProvider({children}) {
  const [data, setData] = useState(podcasts);
  const [api, setApi] = useState([]);
  const [apiEps, setApiEps] = useState();
  const [loading, setLoading] = useState(true);
  const [maxResults, setMaxResults] = useState(20);
  const [inputSearch, setInputSearch] = useState({
    search: '',
  });
  
  
  const {search} = inputSearch;
  
  // TESTANDO API YOUTUBE
  const fetchAPI = async () => {
    const apiKey = 'AIzaSyBGdxRVYAOJ-tEilrfkHITYYMF8YPv0two';
    // const apiKey = 'AIzaSyD0RJ1lLDFbKLwcbwWEF4DSMhs66K9fs5I';

    const idChannel = 'UCJUxZPUsAvX_jFZNYAST0yg'
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&channelId=${idChannel}&maxResults=12&order=date`
    const fetchApi  = await fetch(url);
    const data = await fetchApi.json();
    setApi(data.items);
    setLoading(false);
  }

  const fetchEps = async () => {
    const API_KEY = 'AIzaSyC727DPAuoxAwd9vlZQlW_gmUjKjQBGeks';
    const idChannel = 'UCJUxZPUsAvX_jFZNYAST0yg'
    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&channelId=${idChannel}&maxResults=${maxResults}&order=date`
    const fetchApi  = await fetch(url);
    const data = await fetchApi.json();
    setApiEps(data.items);
    setLoading(false);
  }
  
  useEffect(() => {
    setTimeout(() => {
      fetchAPI();
      fetchEps();
    }, 1500)
  },[])

  const getPodcast = () => {
    const resultInput = apiEps.filter((card) => card.snippet.title.toLowerCase().includes(search.toLowerCase()));
    return resultInput;
  }

    return (
      <MyContext.Provider value={{data, setData, inputSearch, setInputSearch, api, loading, apiEps, setMaxResults, getPodcast}}>
        {children}
      </MyContext.Provider>
  );
}

export default PodcastProvider;
