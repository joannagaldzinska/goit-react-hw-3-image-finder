import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, onShowImage }) => {
  return (
    <li key={id} className={s.ImageGalleryItem} onClick={onShowImage}>
      <img src={webformatURL} alt={id} className={s.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
