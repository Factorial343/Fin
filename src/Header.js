import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import './Header.css';
import BudgetDropdown from './BudgetDropdown';

const Header = () => {
    return (
        <div className="header">
            <img src = {logo} alt = "logo" className="logo_icon" />

            <div className="links">
                <Link to="/home">HOME</Link>
                <Link to="/home">ABOUT</Link>
                <Link to="/home">CONTACT US</Link>
                <Link to="/advisor"><p className="logo">TRY ME!</p></Link>
                <Link to="/AIExpenseSorter">AI Budget Planner</Link>
            </div>
        
            <div style={{ position: 'absolute', top: 20, right: 20 }}>
              <BudgetDropdown />
            </div>
        </div>
    );
}

export default Header;
