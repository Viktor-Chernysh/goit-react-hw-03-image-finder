import { Component } from 'react';
import Loader from 'react-loader-spinner';
import ImageGalleryItem from './ImageGalleryItem';
import s from './ImageGallery.module.css';
import Button from '../Button/Button';
import FetchImages from '../../services/image-finder-api';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23234796-47fbd745329069e6b0b2bf0fd';
const newFetchImages = new FetchImages(BASE_URL, API_KEY);
export default class ImageGallery extends Component {
  state = {
    searchResults: [],
    showModal: false,
    isLoading: false,
    currentImage: {
      url: '',
      alt: '',
    },
  };
  handleLoadMore = () => {
    this.setState({ isLoading: true });
    newFetchImages.page = 1;
    newFetchImages.searchPhotos(this.props.searchQuery, 12).then(results =>
      this.setState(prevState => ({
        searchResults: [...prevState.searchResults, ...results],
        isLoading: false,
      })),
    );

    // console.log(newFetchImages.page);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ isLoading: true });
      newFetchImages
        .searchPhotos(this.props.searchQuery, 12)
        .then(searchResults => {
          this.setState({
            searchResults,
            isLoading: false,
          });
        });
    }
  }

  render() {
    const dataResults = this.state.searchResults;
    return (
      <>
        <ul className={s.ImageGallery}>
          <ImageGalleryItem
            searchResults={this.state.searchResults}
            onClick={this.props.clickOnImage}
          />
        </ul>
        {this.state.isLoading && (
          <Loader
            type="Bars"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
        {dataResults.length > 0 && <Button onClick={this.handleLoadMore} />}
      </>
    );
  }
}
