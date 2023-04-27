import '../styles/header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Header(props) {

    const { titleClassName, linksClassName } = props;

    return (
        <header>
            <div className="title_container">
                <Link to="/"><h1 className={titleClassName}>BRAMA</h1></Link>
            </div>
            <h2>hypnorock du massif central</h2>
            <nav>
                <ul>
                    <li className="navbar_link"><Link to="/ep" className={linksClassName}>Ep</Link></li>
                    <li className="navbar_link"><Link to="/tour" className={linksClassName}>tour</Link></li>
                    <li className="navbar_link"><Link to="/videos" className={linksClassName}>vidéos</Link></li>
                    <li className="navbar_link"><Link to="/about" className={linksClassName}>about</Link></li>
                </ul>
            </nav>
            <Link to="https://www.instagram.com/brama.musique" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
        </header>
    );
}

export default Header;