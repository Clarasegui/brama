import PropTypes from "prop-types";

function YoutubeEmbed({ embedId, videoTitle }) {
    return (
        <div className="videos_responsive">
            <iframe
                width="400"
                height="180"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Brama"
            />
            <div className="videos_title">{videoTitle}</div>
        </div>
    )
};

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;