export default class RestServices {
    static #API_URL = "http://localhost:3002";
    static async #request({
        endpoint, method = "POST", body
    }) {
        const response = await fetch(
            `${RestServices.#API_URL}${endpoint}`, {
                method,
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });
        return response.json();
    }
    static async createRoom(payload) {
        return await this.#request({
            endpoint: "/create-room",
            body: payload
        });
    }
    static async joinRoom(payload) {
        return await this.#request({
            endpoint: "/join-room",
            body: payload
        });
    }
}