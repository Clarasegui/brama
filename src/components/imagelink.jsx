import {useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/imagelink.css';

function ImageLink({link, text, image}) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div
            className="image-link"
            onMouseOver={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="link">
                <Link  to={link}>{text}</Link>
            </div>
            {isHovering && <div className="surround_link"><img src={image} alt="gribouilli" /></div>}

        </div>
    );
}

export default ImageLink;