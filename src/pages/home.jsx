import '../styles/home.css';
import Logo from '../components/logo';
import Navbar from '../components/navbar';

function Home() {
    return (
        <div className="home_container">
            <header>
                <Logo className="home_logo"/>
                <Navbar className="home_navbar"/>
            </header>
            
        </div>
    );
}

export default Home;