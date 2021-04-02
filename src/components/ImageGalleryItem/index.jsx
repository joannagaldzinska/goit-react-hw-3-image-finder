import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, largeImageURL, webformatURL, onShowImage }) => {
  return (
    <li
      key={id}
      className={s.ImageGalleryItem}
      onClick={onShowImage}
      largeImageURL={largeImageURL}
    >
      <img src={webformatURL} alt={id} className={s.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
