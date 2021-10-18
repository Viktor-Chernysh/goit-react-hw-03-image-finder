import { Component } from 'react';
// import Loader from 'react-loader-spinner';

// import 'react-loader-spinner/dist/loader/css/react-loader-spinner.css';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal/Modal';

export default class App extends Component {
  state = {
    searchQuery: '',
    showModal: false,
    currentImage: {
      url: '',
      alt: '',
    },
  };
  handleSubmit = searchQuery => {
    this.setState({ searchQuery });
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  handleGalleryItem = imageFile => {
    this.setState({
      currentImage: {
        url: imageFile.largeImageURL,
        alt: imageFile.tags,
      },
    });
    this.toggleModal();
  };
  scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.searchQuery !== this.state.searchQuery) {
  //     if (this.state.searchQuery === '' || prevState.searchQuery === '') {
  //       alert('Please enter you search request');
  //       return;
  //     }
  //   }
  // }

  render() {
    const { currentImage, showModal, searchQuery } = this.state;
    const { toggleModal, handleSubmit, handleGalleryItem, scrollOnLoadButton } =
      this;
    return (
      <div className="App">
        {showModal && (
          <Modal toggleModal={toggleModal}>
            <img src={currentImage.url} alt={currentImage.alt} />{' '}
          </Modal>
        )}
        <Searchbar onSubmit={handleSubmit} />
        <ImageGallery
          searchQuery={searchQuery}
          clickOnImage={handleGalleryItem}
          scrollTo={scrollOnLoadButton}
        />
      </div>
    );
  }
}
