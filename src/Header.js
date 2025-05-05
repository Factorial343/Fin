import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo_icon" />

      <div className="links">
        <Link to="/home">HOME</Link>
        <Link to="/home">ABOUT</Link>
        <Link to="/home">CONTACT US</Link>
        <Link to="/AIExpenseSorter"> <button className="learn-btn">AI Budget Planner</button></Link>
        <Link to="/learn-budgeting"> <button className="learn-btn">Learn Budgeting & Taxes</button></Link>
        <Link to="/advisor"><button className="learn-btn">Chat With Us!</button></Link>
      </div>
    </div>
  );
};

export default Header;
