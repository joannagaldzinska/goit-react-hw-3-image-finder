import { Component } from 'react';
import s from './SearchBar.module.css';

export default class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <form className={s.SearchForm} onSubmit={this.handleSubmit}>
        <input
          className={s.SearchFormInput}
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
        />

        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>
      </form>
    );
  }
}
