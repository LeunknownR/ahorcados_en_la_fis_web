import { hasText, toStringFullTrimmed } from "../../utils/string.js";

export default class JoinRoomPayload {
    constructor(body) {
        this.soothsayerNickname = this.#toSoothsayerNickname(body?.soothsayerNickname);
        this.roomId = this.#toRoomId(body?.roomId);
    }
    #toSoothsayerNickname(masterNickname) {
        if (!hasText(masterNickname)) 
            throw new Error("Invalid soothsayer nickname");
        return toStringFullTrimmed(masterNickname);
    }
    #toRoomId(roomId) {
        if (!hasText(roomId))
            throw new Error("Invalid room id");
        return roomId;
    }
}