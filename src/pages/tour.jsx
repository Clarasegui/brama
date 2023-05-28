import '../styles/tour.css';
import Navbar from '../components/navbar';
import tours from '../data/tours.json';

function Tour() {

    return (
        <div className="tour_container">
            <header>
                <Navbar navBarClassName="tour_navbar" logoClassName="tour_logo" />
            </header>
            <div className="tour_content">
                {tours.map(tour =>
                    <div key={tour.month}>
                        <p className="tour_content_title">{tour.month}</p>
                        <ul className="tour_list">

                            {
                                tour.concerts.map(concert =>
                                    <li key={concert.id}>
                                        <p className="tour_date">{concert.date}</p> | <p className="tour_city">{concert.city}</p> | <p className="tour_location">{concert.location}</p>
                                    </li>
                                )
                            }

                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tour;