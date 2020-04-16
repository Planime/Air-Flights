import config from "../config/apiConfig"

/**
 * countries
 * cities
 */


class Api {
    constructor(config) {
        this.url = config.url;
    }

     countries() {
        try {
            const response = fetch(`${this.url}/countries`)
                .then(data => data.json())
                .then(data => data)

            return response
        } catch (error) {
            return Promise.reject(error)
        }

    }

     cities() {
        try {
            const response = fetch(`${this.url}/cities`)
                .then(data => data.json())
                .then(data => data);
            return response
        } catch (error) {
            return Promise.reject(error)
        }
    }

}

const api = new Api(config);


export default api