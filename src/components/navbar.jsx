import "../styles/navbar.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Navbar(props) {

    const {className} = props;

    return (
        <div className={className}>
        <h2>hypnorock du massif central</h2>
            <nav>
                <ul>
                    <li><Link to="/ep">Ep</Link></li>
                    <li><Link to="/tour">tour</Link></li>
                    <li><Link to="/videos">vidéos</Link></li>
                    <li ><Link to="/about">about</Link></li>
                </ul>
            </nav>
            <Link to="https://www.instagram.com/brama.musique" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
   </div>
            )
}

export default Navbar;