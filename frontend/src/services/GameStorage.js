export default class GameStorage {
    static setGameData(gameData) {
        sessionStorage.setItem("gameData", JSON.stringify(gameData));
    }
    static getGameData() {
        return JSON.parse(sessionStorage.getItem("gameData"));
    }
}