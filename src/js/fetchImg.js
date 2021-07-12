const Api_KEY = '22346616-da93255f31f30d17d2f747f5d';
const Base_URL = 'https://pixabay.com/api/';

export default class ApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

     fetchImage() {
        console.log(this);
        const url =  `${Base_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${Api_KEY}`;
         return fetch(url)
             .then(response => response.json())
             .then(({ hits }) => {
                 this.incrementPage();
                 return hits;
         })
    }

     incrementPage () {
        this.page +=1;
    }

     resetPage () {
        this.page =1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }

}