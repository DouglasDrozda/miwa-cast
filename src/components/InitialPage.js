import React from "react";
import Header from "./Header";
import Apresentation from "./Apresentation";
import Podcast from './Podcast';
import Footer from "./Footer";


function InitialPage() {
  return (
    <div>
      <Header />
      <Apresentation />
      <Podcast />
      <Footer />
    </div>
  )
}

export default InitialPage;