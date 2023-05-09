import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/imagelink.css';

function ImageLink({ link, text, image, className }) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div
            className="image-link"
            onMouseOver={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <Link to={link}>
                <p className="link">{text}</p>
                {isHovering && <div className={className}><img src={image} alt="gribouilli" /></div>}
            </Link>

        </div>
    );
}

export default ImageLink;