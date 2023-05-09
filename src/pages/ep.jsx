import '../styles/ep.css';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import BramaVinyle from '../assets/images/brama_vinyle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faDeezer } from '@fortawesome/free-brands-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import { faBandcamp } from '@fortawesome/free-brands-svg-icons';

function Ep() {
    return (
        <div className="ep_container">
            <header>
                <Navbar navBarClassName="ep_navbar" logoClassName="ep_logo" />
            </header>
            <div className="ep_content_container">
                <div className="ep_content_left">
                    <p className="ep_description">Puisant son infuence tant dans le
                        krautrock que le rock psychédélique ou
                        la noise, cet EP est résolument inscrit
                        dans un folklore imaginaire bien à eux.
                    </p>
                    <p className="ep_description">Vielle à roue, guitare et batterie
                        transfigurées dans une poésie orageuse
                        occitane et un hypno-rock solaire, cette
                        première sortie du groupe est un DIY
                        pétaradant saturé d’électricité.
                    </p>
                    <p className="ep_description">Glaner : recueillir les épis qui ont
                        échappé aux moissons ; ici se trouve
                        l’énergie de ce premier opus, glanée
                        au milieu d’un rock mondialisé et de
                        traditions populaires locales.
                    </p>
                    <p className="ep_title">1er EP</p>
                    <p className="ep_title">La glane</p>
                </div>
                <div className="ep_content_center">
                    <img src={BramaVinyle} alt="Brama EP Vinyle" className="ep_image" />
                </div>
                <div className="ep_content_right">
                    <ul>
                        <li className="music_list">
                            <Link to="https://open.spotify.com/artist/5yiG7NvkCxGBKqnXT1gVhd" target="_blank" className="music_link"><FontAwesomeIcon icon={faSpotify} style={{ paddingRight: '1rem' }} />Spotify</Link>
                        </li>
                        <hr />
                        <li className="music_list">
                            <Link to="https://www.deezer.com/fr/artist/1207589" target="_blank" className="music_link"><FontAwesomeIcon icon={faDeezer} style={{ paddingRight: '1rem' }} />Deezer</Link>
                        </li>
                        <hr />
                        <li className="music_list">
                            <Link to="https://music.apple.com/fr/artist/brama/301822754" target="_blank" className="music_link"><FontAwesomeIcon icon={faApple} style={{ paddingRight: '1rem' }} />Apple Music</Link>
                        </li>
                        <hr />
                        <li className="music_list">
                            <Link to="https://www.deezer.com/fr/artist/1207589" target="_blank" className="music_link"><FontAwesomeIcon icon={faAmazon} style={{ paddingRight: '1rem' }} />Amazon Music</Link>
                        </li>
                        <hr />
                        <li className="music_list">
                            <Link to="https://bramamusic.bandcamp.com/album/la-glane" target="_blank" className="music_link"><FontAwesomeIcon icon={faBandcamp} style={{ paddingRight: '1rem' }} />Bandcamp</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Ep;