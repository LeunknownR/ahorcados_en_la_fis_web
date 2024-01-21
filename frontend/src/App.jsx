import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import { Main } from "./views/components/styles";
import ABSOLUTE_PATHS from "./config/absolutePaths";
import Preloader from "./components/Preloader";
import usePreloader from "./components/Preloader/utils/hooks/usePreloader";
import AppContext from "./utils/context/AppContext";
import useGameService from "./services/gameService/hooks/useGameService";
import Game from "./views/Game";

const App = () => {
    const preloader = usePreloader();
	const gameService = useGameService();
	return (
		<AppContext.Provider value={{
			preloader,
			gameService
		}}>
			<Main>
				<BrowserRouter>
					<Routes>
						<Route
							path={ABSOLUTE_PATHS.HOME}
							element={<Home/>}/>
						<Route
							path="*"
							element={<Game/>}/>
					</Routes>
				</BrowserRouter>
				<Preloader show={preloader.show}/>
			</Main>
		</AppContext.Provider>
	);
}

export default App;