import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './css/App.css';
import './css/adaptive.css'
import MainPage from "./components/MainPage/MainPage";
import React from "react";
import MainPageRu from "./components/MainPage/MainPageRu";
import NotFound from "./components/Errors/NotFound";
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/*" element={<MainPage/>} />
          <Route path="/ru/*" element={<MainPageRu />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

  );
}

export default App;
