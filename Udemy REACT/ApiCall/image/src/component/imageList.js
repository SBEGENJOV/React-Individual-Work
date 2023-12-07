import ImageItem from './imageItemm';

function ImageList({ imagesPlaceholder }) {
  return (
    <div className="imageList"  >
      {imagesPlaceholder.map((image, index) => {
       return <ImageItem index={index} image={image} />;
      })}
    </div>
  );
}

export default ImageList;
