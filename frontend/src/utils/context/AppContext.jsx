import { createContext } from "react";

const INIT_CONTEXT = {
    preloader: {
        show: false,
        open: () => {},
        hide: () => {},
    },
    gameService: {
        connect: () => {},
        disconnect: () => {},
        on: (event, handler) => {},
        emit: (event, body) => {},
        isConnected: false
    }
};
const AppContext = createContext(INIT_CONTEXT);

export default AppContext;