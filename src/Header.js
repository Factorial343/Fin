import { NavLink } from 'react-router-dom';
import logo from './images/logo.png';
import './Header.css';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <img src={logo} alt="NeuroBank Logo" className="logo_icon" />

      {/* Hamburger for mobile */}
      <div
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span style={{ transform: open ? 'rotate(45deg) translate(5px, 5px)' : '' }} />
        <span style={{ opacity: open ? 0 : 1 }} />
        <span style={{ transform: open ? 'rotate(-45deg) translate(5px, -5px)' : '' }} />
      </div>

      <nav className={`links ${open ? 'open' : ''}`}>
        <NavLink to="/home"     className="nav-link" onClick={() => setOpen(false)}>
          HOME
        </NavLink>
        <NavLink to="/contact"  className="nav-link" onClick={() => setOpen(false)}>
          CONTACT US
        </NavLink>
        <NavLink
          to="/AIExpenseSorter"
          className="cta-btn"
          onClick={() => setOpen(false)}
        >
          AI Budget Planner
        </NavLink>
        <NavLink
          to="/learn-budgeting"
          className="cta-btn"
          onClick={() => setOpen(false)}
        >
          Learn Budgeting & Taxes
        </NavLink>
        <NavLink
          to="/advisor"
          className="cta-btn"
          onClick={() => setOpen(false)}
        >
          Talk to Me!
        </NavLink>
      </nav>
    </header>
  );
}



