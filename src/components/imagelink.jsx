import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/imagelink.css';

function ImageLink({ link, text, image }) {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div
            className="image-link"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => setIsClicked(!isClicked)}
        >
            <Link to={link}>{text}</Link>
            {isHovering && !isClicked && <img src={image} alt="gribouilli" className="surround_link" />}
        </div>
    );
}

export default ImageLink;