import { Http } from '../core/http.service';
import { ENV } from '../config/env';

export class NewsService {
    // getNews(token) {
    //     const http = new Http();

    //     return new Promise((resolve, reject) => {
    //         http.get(`${ENV.apiUrl}/public/news`, {'x-access-token': token})
    //             .then((response) => {
    //                 //if (!response.auth) return reject(response); 
    //                 resolve(response);
    //             })
    //             .catch((err) => reject(err));
    //     });
    // }
}

