import './Navbar.css';
import { NavLink } from 'react-router';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li> | <li><NavLink to="/Sell">Sell</NavLink></li> | <li><NavLink to="/Buy">Buy</NavLink></li>
      </ul>
    </nav>
  )
}
