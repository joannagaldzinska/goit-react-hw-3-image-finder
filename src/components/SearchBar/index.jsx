import s from '../SearchForm/SearchBar.module.css';

const SearchBar = ({ children }) => {
  return <header className={s.Searchbar}>{children}</header>;
};

export default SearchBar;
