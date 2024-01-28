export default class RestServices {
    static #BACKEND_HTTP_URL = import.meta.env.VITE_BACKEND_HTTP_URL;
    static async #request({
        endpoint, method = "POST", body
    }) {
        const url = RestServices.#BACKEND_HTTP_URL || new URL(window.location).origin;
        const response = await fetch(
            `${url}/api${endpoint}`, {
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