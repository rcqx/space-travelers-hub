import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navigation.css';
import planet from '../img/planet.png';

const Navigation = () => (
  <div className="navigation-container">
    <div>
      <Link to="/" className="logo">
        <img src={planet} alt="planetLogo" className="logo-img" />
        Space Travellers Hub
      </Link>
    </div>
    <div className="right-links">
      <Link className="rockets" to="/">Rockets</Link>
      <Link className="missions" to="/missions">Mission |</Link>
      <Link className="profile" to="/profile">My profile</Link>
    </div>
  </div>
);

export default Navigation;
