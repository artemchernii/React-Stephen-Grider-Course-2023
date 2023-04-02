import axios from 'axios';
const ACCESS_KEY = 'e1sIL-d6_FpiXxbk2pMx-40tzuzR0FQ69FlH2Y1lk5A';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`,
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;
