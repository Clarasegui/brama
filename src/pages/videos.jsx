import '../styles/videos.css';
import Logo from '../components/logo';
import Navbar from '../components/navbar';
import YoutubeEmbed from '../components/youtubeEmbed';

function Videos() {
    return (
        <div className="videos_container">
            <header>
                <Logo className="videos_logo" />
                <Navbar className="videos_navbar" />
            </header>
            <div className="videos_content">
                <YoutubeEmbed embedId="NyLDeixQhoo" videoTitle={"ma jòia"}/>
                <YoutubeEmbed embedId="LZ8xWa43kNs" videoTitle={"chordata"} />
                <YoutubeEmbed embedId="BwHTePMoR7M" videoTitle={"saber volar"} />
                <YoutubeEmbed embedId="YHyg84rFytY" videoTitle={"rulha"} />
                <YoutubeEmbed embedId="BJ_YlAUClLo" videoTitle={"la glane"} />
            </div>
        </div>
    );
}

export default Videos;