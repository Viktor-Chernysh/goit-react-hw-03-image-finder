import axios from 'axios';

export default class FetchImages {
  constructor(BASE_URL, API_KEY) {
    this.BASE_URL = BASE_URL;
    this.API_KEY = API_KEY;
  }
  searchPhotos(searchQuery, perPage, page) {
    axios.defaults.baseURL = this.BASE_URL;
    let url = `?key=${this.API_KEY}&q=${searchQuery}&per_page=${perPage}&page=${page}`;
    return axios
      .get(url)
      .then(res => res.data.hits)
      .catch(error => console.log(error));
  }
}
