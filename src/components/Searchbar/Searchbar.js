import { Component } from 'react';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchQuery.toLowerCase().trim());
    this.setState({ searchQuery: '' });
  };
  handleQueryChange = e => {
    this.setState({ searchQuery: e.target.value });
  };
  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            onChange={this.handleQueryChange}
            className={s.SearchFormInput}
            value={this.state.searchQuery}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
