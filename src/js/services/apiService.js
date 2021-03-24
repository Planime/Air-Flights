import config from "../config/apiConfig"

/**
 * countries
 * cities
 */


class Api {
    constructor(config) {
        this.url = config.url;
    }

     async countries() {
        try {
            const response = await fetch(`${this.url}/countries`)
            let res = await response.json()
            // console.log(res)
            return res


        } catch (error) {
            return Promise.reject(error)
        }

    }

     async cities() {
        try {
            const response = await fetch(`${this.url}/cities`)
                let res = await response.json()
            return res
        } catch (error) {
            return Promise.reject(error)
        }
    }

}

const api = new Api(config);

export default api