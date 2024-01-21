import { createContext } from "react";

const INIT_CONTEXT = {
    nickname: ""
};
const HomeContext = createContext(INIT_CONTEXT);

export default HomeContext;