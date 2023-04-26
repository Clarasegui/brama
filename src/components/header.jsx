import '../styles/header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Header() {
    return (
        <header>
            <div className="title_container">
                <Link to="/"><h1>BRAMA</h1></Link>
            </div>
            <h2>hypnorock du massif central</h2>
            <nav>
                <ul>
                    <li className="navbar_link"><Link to="/ep">Ep</Link></li>
                    <li className="navbar_link"><Link to="/tour">tour</Link></li>
                    <li className="navbar_link"><Link to="/videos">vidéos</Link></li>
                    <li className="navbar_link"><Link to="/about">about</Link></li>
                </ul>
            </nav>
            <Link to="https://www.instagram.com/_clarasegui/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
        </header>
    );
}

export default Header;