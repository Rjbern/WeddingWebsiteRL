import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" end className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
      <NavLink to="/rsvp" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>RSVP</NavLink>
      <NavLink to="/theme-and-attire" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Theme & Attire</NavLink>
      <NavLink to="/venue" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Venue</NavLink>
      {/* <NavLink to="/schedule" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Schedule</NavLink> */}
      <NavLink to="/faq" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>FAQ</NavLink>
    </nav>
  );
}
