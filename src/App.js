import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'components/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem';
import SearchForm from 'components/SearchForm';
import SearchBar from 'components/SearchBar';
import imageApi from './services/image-api';
import Button from './components/Button';
import Modal from './components/Modal';

//  axios.defaults.headers.common['Authorization'] =
//  'Bearer 20692392-f670546c71115024111737049' ======>>>> NOT WORKING

export default class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    imageApi
      .fetchImages(options)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  render() {
    const { images, isLoading, error, showModal, largeImageURL } = this.state;
    const shouldLoadMoreBtnRender = images.length > 0 && !isLoading;
    return (
      <div>
        {error && <h1>Error 404... Please try again... </h1>}
        <SearchBar>
          <SearchForm onSubmit={this.onChangeQuery} />
        </SearchBar>

        <ImageGallery>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              onShowImage={this.toggleModal}
              // largeImageURL={image.largeImageURL}
              webformatURL={image.webformatURL}
              onClick={image.largeImageURL}
            />
          ))}{' '}
        </ImageGallery>

        {isLoading && <h2> Loading images...</h2>}

        {shouldLoadMoreBtnRender && <Button onFetch={this.fetchImages} />}

        {showModal && <Modal></Modal>}
      </div>
    );
  }
}
