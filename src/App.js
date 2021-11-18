import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InitialPage from "./components/InitialPage";
import Episodes from "./pages/episodes";
import PodcastProvider from "./context/PodcastProvider";


function App() {
  return (
    <PodcastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/episodios" element={<Episodes />} />
        </Routes>
      </BrowserRouter>
    </PodcastProvider>
  );
}

export default App;
