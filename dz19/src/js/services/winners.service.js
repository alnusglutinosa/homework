import { ENV } from '../config/env';
import { Http } from '../core/http.service';


/** Class representing the winners service. */
export class WinnersService {
    /**
     * Create winners service.
     */
    constructor() {}

    /**
     * Get winners.
     * @return {object} new promise.
     */
    getWinners(partWinners = 1, limitWinners = 10) {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.get(`${ENV.apiUrl}/public/winners?part=${partWinners}&limit=${limitWinners}`)
                .then((response) => {
                    resolve(response);
                })
                .catch((err) => reject(err));
        });
    }
}