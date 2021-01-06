import './GalleryTileCaption.css';

const GalleryTileCaption = props => {
    return (
        <div className={props.className + " w-100 p-2 position-absolute text-uppercase text-left caption"}>
            {props.captionTitle}
        </div>
    );
};

export default GalleryTileCaption;
