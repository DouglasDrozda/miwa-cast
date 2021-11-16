import React from "react";
import Header from "./Header";
import Apresentation from "./Apresentation";
import Podcast from './Podcast';


function InitialPage() {
  return (
    <div>
      <Header />
      <Apresentation />
      <Podcast />
    </div>
  )
}

export default InitialPage;