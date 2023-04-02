import ImageShow from './ImageShow';

export default function ImageList({ images }) {
    const renderedImageList = images.map((image) => (
        <ImageShow key={image.id} image={image} />
    ));
    return <div className="image-list">{renderedImageList}</div>;
}
