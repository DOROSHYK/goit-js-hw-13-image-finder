const Api_KEY = '22346616-da93255f31f30d17d2f747f5d';
const Base_URL = 'https://pixabay.com/api/';

export default class ApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    async fetchImage() {
        console.log(this);
        const url =  await `${Base_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${Api_KEY}`;
        if (!url.ok) {
            throw new Error(`Sorry, but no such ${url.status} was found` )
        }
        const img = await url.json();
        incrementPage();
        return await img.hits;
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