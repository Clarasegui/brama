import '../styles/tour.css';
import Logo from '../components/logo';
import Navbar from '../components/navbar';

function Tour() {
    return (
        <div className="tour_container">
            <header>
                <Logo className="tour_logo" />
                <Navbar className="tour_navbar" />
            </header>
            <div className="tour_content">
                <p className="tour_content_title">MARS</p>
                <ul className="tour_list">
                    <li>
                        <p className="tour_date">16</p>|<p className="tour_city">Chambery</p>|<p className="tour_location">Apej</p></li>
                    <li>
                        <p className="tour_date">17</p>|<p className="tour_city">Macon</p>|<p className="tour_location">La cave à Musique</p>
                    </li>
                    <li>
                        <p className="tour_date">31</p>|<p className="tour_city">Puy en Velay</p>|<p className="tour_location">Lo Festanal</p>
                    </li>
                </ul>
                <p className="tour_content_title">AVRIL</p>
                <ul className="tour_list">
                    <li>
                        <p className="tour_date">13</p>|<p className="tour_city">Joue les Tours</p>|<p className="tour_location">Le Temps Machine</p>
                    </li>
                    <li>
                        <p className="tour_date">15</p>|<p className="tour_city">St Brieuc</p>|<p className="tour_location">Bonjour Minuit</p>
                    </li>
                    <li>
                        <p className="tour_date">20</p>|<p className="tour_city">St Etienne</p>|<p className="tour_location">Le Fil</p>
                    </li>
                    <li>
                        <p className="tour_date">21</p>|<p className="tour_city">Paris</p>|<p className="tour_location">La Maroquinerie</p>
                    </li>
                    <li>
                        <p className="tour_date">22</p>|<p className="tour_city">Clermont Ferrand</p>|<p className="tour_location">La Copée</p>
                    </li>
                    <li>
                        <p className="tour_date">26 ou 27</p>|<p className="tour_city">Parise</p>|<p className="tour_location">La Maroquinerie</p>
                    </li>
                    <li>
                        <p className="tour_date">30</p>|<p className="tour_city">Paris</p>|<p className="tour_location">La Maroquinerie</p>
                    </li>
                </ul>
                <p className="tour_content_title">MAI</p>
                <ul className="tour_list">
                    <li>
                        <p className="tour_date">4</p>|<p className="tour_city">Romans</p>|<p className="tour_location">La Cordo</p>
                    </li>
                    <li>
                        <p className="tour_date">14</p>|<p className="tour_city">Dijon</p>|<p className="tour_location">La Vapeur</p>
                    </li>
                    <li>
                        <p className="tour_date">28</p>|<p className="tour_city">Vic sur Cère</p>|<p className="tour_location"></p>
                    </li>
                    <li>
                        <p className="tour_date">2</p>|<p className="tour_city">Nîmes</p>|<p className="tour_location"></p>
                    </li>
                </ul>
                <p className="tour_content_title">JUIN</p>
                <ul className="tour_list">
                    <li>
                        <p className="tour_date">2</p>|<p className="tour_city">Nîmes</p>|<p className="tour_location">Total Festum 2023</p>
                    </li>
                </ul>
                <p className="tour_content_title">JUILLET</p>
                <ul className="tour_list">
                    <li>
                        <p className="tour_date">7/8</p>|<p className="tour_city">Saint-Denis-de-Gastines</p>|<p className="tour_location">Au Foin de La Rue</p>
                    </li>
                    <li>
                        <p className="tour_date">14/15</p>|<p className="tour_city">Taix</p>|<p className="tour_location">Les Pieds Dans La Bassine</p>
                    </li>
                    <li>
                        <p className="tour_date">1/12</p>|<p className="tour_city">Canada</p>|<p className="tour_location"></p>
                    </li>
                    <li>
                        <p className="tour_date">14</p>|<p className="tour_city">Carhaix</p>|<p className="tour_location">Vieilles Charrues</p>
                    </li>
                    <li>
                        <p className="tour_date">21/22/23</p>|<p className="tour_city">Val d'Ajol</p>|<p className="tour_location">Le Pied Orange</p>
                    </li>
                    <li>
                        <p className="tour_date">23</p>|<p className="tour_city">SP Vigo SP</p>|<p className="tour_location">Sinsal Festival</p>
                    </li>
                    <li>
                        <p className="tour_date">25</p>|<p className="tour_city">PT Sines</p>|<p className="tour_location">FMM Sines</p>
                    </li>
                </ul>
                <p className="tour_content_title">AOÛT</p>
                <ul className="tour_list">
                    <li>
                        <p className="tour_date">25</p>|<p className="tour_city">Château de Lafauche</p>|<p className="tour_location">Caph’ARTS’Naüm</p>
                    </li>
                   </ul>
            </div>
        </div>
    );
}

export default Tour;