import React, { useEffect, useState } from 'react';
import MyContext from './index';
import podcasts from '../services/data';

function PodcastProvider({children}) {
  const [data, setData] = useState(podcasts);
  const [api, setApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPageToken, setNextPageToken] = useState('');
  const [inputSearch, setInputSearch] = useState({
    search: '',
  });
  
  const {search} = inputSearch;
  
  // TESTANDO API YOUTUBE
  const fetchAPI = async () => {
    // const apiKey = 'AIzaSyBGdxRVYAOJ-tEilrfkHITYYMF8YPv0two';
    const apiKey = 'AIzaSyANucCx2-E6oQDE8Aw7TDzopWw9R4If8BE';

    const idChannel = 'UCJUxZPUsAvX_jFZNYAST0yg'
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&channelId=${idChannel}&maxResults=50&pageToken=${nextPageToken}&order=date`
    const fetchApi  = await fetch(url);
    const data = await fetchApi.json();
    setNextPageToken(data.nextPageToken)
    setApi(data.items);
    setLoading(false);
  }
  
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
      <MyContext.Provider value={{data, setData, inputSearch, setInputSearch, api, loading, getPodcast, fetchAPI}}>
        {children}
      </MyContext.Provider>
  );
}

export default PodcastProvider;
