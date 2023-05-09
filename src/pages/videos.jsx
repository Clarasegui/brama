import '../styles/videos.css';
import Navbar from '../components/navbar';
import YoutubeEmbed from '../components/youtubeEmbed';

function Videos() {
    return (
        <div className="videos_container">
            <header>
                <Navbar navBarClassName="videos_navbar" logoClassName="videos_logo" />
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