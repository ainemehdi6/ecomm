import { Link, NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <div className="header">
            <NavLink className="nav-link" to="/">Accueil</NavLink>
            <NavLink className="nav-link" to="/Login">Connexion</NavLink>
            <NavLink className="nav-link" to="/Product">Les produits</NavLink>
            <NavLink className="nav-link" to="/Cart">Cart</NavLink>
        </div>
    );
}