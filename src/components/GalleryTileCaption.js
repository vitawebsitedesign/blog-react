import './GalleryTileCaption.css';

const GalleryTileCaption = props => {
    return (
        <div className="w-100 px-1 py-2 position-absolute text-uppercase caption">
            {props.captionTitle}
        </div>
    );
};

export default GalleryTileCaption;
