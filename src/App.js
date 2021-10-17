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

  render() {
    return (
      <div className="App">
        {this.state.showModal && (
          <Modal
            currentImage={this.state.currentImage}
            toggleModal={this.toggleModal}
          />
        )}
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          searchQuery={this.state.searchQuery}
          clickOnImage={this.handleGalleryItem}
          scroll={this.scrollOnLoadButton}
        />
      </div>
    );
  }
}
