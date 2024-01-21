const REVELEADED_PHRASE_WINDOW_SIZE = Object.freeze({
    width: 600,
    height: 400
});
export const revealPhrase = phrase => {
    const position = {
        x: screen.width/2 - REVELEADED_PHRASE_WINDOW_SIZE.width/2,
        y: screen.height/2 - REVELEADED_PHRASE_WINDOW_SIZE.height/2
    };
    const newWindow = window.open("/phrase-reveleaded/index.html", "phraseReveleadedWindow", `
        width=${REVELEADED_PHRASE_WINDOW_SIZE.width}, 
        height=${REVELEADED_PHRASE_WINDOW_SIZE.height}, 
        left=${position.x}, 
        top=${position.y}
    `);
    newWindow.addEventListener("DOMContentLoaded", () => {
        newWindow.document.querySelector("#phrase").innerText = phrase;
    });
    newWindow.document.close();
};