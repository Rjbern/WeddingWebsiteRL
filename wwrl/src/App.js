import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import RSVP from './pages/RSVP';
import Venue from './pages/Venue';
import Schedule from './pages/Schedule';
import ThemeAndAttire from './pages/ThemeAndAttire';
import FAQ from './pages/FAQ';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/theme-and-attire" element={<ThemeAndAttire />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
