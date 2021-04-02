import s from './Button.module.css';

const Button = ({ onFetch }) => {
  return (
    <button className={s.Button} type="button" onClick={onFetch}>
      Load more
    </button>
  );
};

export default Button;
