import React, { useState } from 'react';
import MyContext from './index';
import podcasts from '../services/data';

function PodcastProvider({children}) {
  const [data, setData] = useState(podcasts);
  const [inputSearch, setInputSearch] = useState({
    search: '',
  });

  const {search} = inputSearch;


  const getPodcast = () => {
    const resultInput = Object.values(data).filter((card) => card.title.toLowerCase().includes(search.toLowerCase()));
    return resultInput;
  }

    return (
      <MyContext.Provider value={{data, setData, getPodcast, inputSearch, setInputSearch}}>
        {children}
      </MyContext.Provider>
  );
}

export default PodcastProvider;
