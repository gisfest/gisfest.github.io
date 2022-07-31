import './styles/App.css';
import Header from './components/Header/Header';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/Home/Home';
import Team from './pages/Team/Team';
import Footer from './components/Footer/Footer';
// import Gallery from './pages/Gallery/Gallery';
import FAQS from './pages/FAQS/FAQS';
// import Travel from './pages/Travel/Travel';
import Schedule from './pages/Schedule/Schedule';
import CallForSpeakers from './pages/CallForSpeakers/CallForSpeakers';
import Hackathon from './pages/Hackathon/Hackathon';


function App() {

  return (
    <div className="main">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route path="/team" element={<Team />}/>
          {/* <Route path="/gallery" element={<Gallery/>}/>*/}
          {/*<Route path="/travel" element={<Travel />}/>*/}
          <Route path="/faqs" element={<FAQS />}/>
          <Route path="/call-for-speakers"  element={<CallForSpeakers />}/>
          <Route path="/schedule" element={<Schedule/>}/>
          <Route path="/Hackathon" element={<Hackathon />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
