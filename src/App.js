import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InitialPage from "./components/InitialPage";
import Episodes from "./pages/episodes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/episodios" element={<Episodes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
