import '../styles/home.css';
import Navbar from '../components/navbar';

function Home() {
    return (
        <div className="home_container">
            <header>
                <Navbar navBarClassName="home_navbar" logoClassName="home_logo" />
            </header>
        </div>
    );
}

export default Home;