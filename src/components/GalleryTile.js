import GalleryTileCaption from './GalleryTileCaption';
import './GalleryTile.css';

const playVideo = (event) => {
    const video = event.currentTarget.querySelector('.gallery-tile--video');
    video.play();  

    const caption = event.currentTarget.querySelector('.caption');
    caption.classList.add('active');
};

const resetVideo = (event) => {
    const video = event.currentTarget.querySelector('.gallery-tile--video');
    video.pause();
    video.currentTime = 0;

    const caption = event.currentTarget.querySelector('.caption');
    caption.classList.remove('active');
};

const GalleryTile = props => {
    return (
        <a href={props.href} onMouseEnter={playVideo} onMouseLeave={resetVideo} className="ml-4 position-relative gallery-tile">
            <GalleryTileCaption captionTitle={props.captionTitle} />
            <video className="gallery-tile--video" muted loop>
                <source src={props.src} type="video/mp4" />
            </video>
        </a>
    );
};

export default GalleryTile;
