import config from './config';
import axios from 'axios';

export async function getArticles(country = config.country_code, category = config.defaultCategory, q = null) {
    let url = config.articles_url
        //https://newsapi.org/v2/top-headlines?country=us&apiKey=2f65b3ad3d264e91859b6e04709f912c
        //https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=2f65b3ad3d264e91859b6e04709f912c
    let params = {
        apiKey: config.apiKey,
        country,
        category,
        q

    }
    const res = await axios(url, { params });
    return res.data;

}