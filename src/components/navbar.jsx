import "../styles/navbar.css";
import { Link } from 'react-router-dom';
import Logo from '../components/logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import ImageLink from '../components/imagelink';
import LinkEp from '../assets/images/link_ep.png';
import LinkTour from '../assets/images/link_tour.png';
import LinkVideos from '../assets/images/link_videos.png';
import LinkAbout from '../assets/images/link_about.png';

function Navbar(props) {

    const { navBarClassName, logoClassName } = props;

    return (
        <div className={navBarClassName}>
            <div><Logo className={logoClassName} />
            <h2>hypnorock du massif central</h2></div>
            <nav>
                <ul className="navbar_links">
                    <li className="li_ep"><ImageLink link="/ep" text="EP" className="link_ep" image={LinkEp} /></li>
                    <li><ImageLink link="/tour" text="tour" className="link_tour" image={LinkTour} /></li>
                    <li><ImageLink link="/videos" text="videos" className="link_videos" image={LinkVideos} /></li>
                    <li><ImageLink link="/about" text="about" className="link_about" image={LinkAbout} /></li>
                </ul>
            </nav>
            <Link to="https://www.instagram.com/brama.musique" target="_blank" className="instagram_icon"><FontAwesomeIcon icon={faInstagram} size="lg" /></Link>
            <Link to="https://www.facebook.com/Bramamusique/" target="_blank" className="instagram_icon"><FontAwesomeIcon icon={faFacebook} size="lg" /></Link>
        </div>
    )
}

export default Navbar;