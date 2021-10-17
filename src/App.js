import { Component } from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import FetchImages from './services/image-finder-api';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23234796-47fbd745329069e6b0b2bf0fd';
const newFetchImages = new FetchImages(BASE_URL, API_KEY);

export default class App extends Component {
  state = {
    searchQuery: '',
    data: [],
  };
  handleSubmit = searchQuery => {
    this.setState({ searchQuery });
    newFetchImages.searchPhotos(this.state.searchQuery, 12, 1);
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      newFetchImages
        .searchPhotos(this.state.searchQuery, 12, 1)
        .then(res => this.setState({ data: res }));
    }
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
