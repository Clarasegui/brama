import '../styles/logo.css';
import { Link } from 'react-router-dom';

function Logo(props) {

    const {className} = props;

    return (
        <div>
            <Link to="/"><h1 className={className}>BRAMA</h1></Link>
        </div>
    )
}

export default Logo;