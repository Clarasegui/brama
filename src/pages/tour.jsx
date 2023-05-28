import '../styles/tour.css';
import Navbar from '../components/navbar';

function Tour() {
    return (
        <div className="tour_container">
            <header>
                <Navbar navBarClassName="tour_navbar" logoClassName="tour_logo" />
            </header>
            <div className="tour_content">
                <p className="tour_content_title">JUIN</p>
                <ul className="tour_list">
                    <li>
                        <p className="tour_date">2</p>|<p className="tour_city">Nîmes</p>|<p className="tour_location">Total Festum 2023</p>
                    </li>
                </ul>
                <p className="tour_content_title">JUILLET</p>
                <ul className="tour_list">
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