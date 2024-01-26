import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, {useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Campionship} from "./Championship.js";
import {Home} from "./home.js";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/campionship" element={<Campionship />}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
