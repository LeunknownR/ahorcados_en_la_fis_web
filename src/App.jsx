import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import { Main } from "./views/components/styles";
import WaitingRoom from "./views/WaitingRoom";
import GameOverScene from "./views/GameOverScene";
import ABSOLUTE_PATHS from "./config/absolutePaths";
import Game from "./views/Game";

const App = () => {
	return (
		<Main>
			<BrowserRouter>
				<Routes>
					<Route
						path={ABSOLUTE_PATHS.HOME}
						element={<Home/>}/>
					<Route
						path={ABSOLUTE_PATHS.WAITING_ROOM}
						element={<WaitingRoom/>}/>
					<Route
						path={ABSOLUTE_PATHS.GAME}
						element={<Game/>}/>
					<Route
						path={ABSOLUTE_PATHS.GAME_OVER_SCENE}
						element={<GameOverScene/>}/>
					<Route
						path="*"
						element={<Navigate to={ABSOLUTE_PATHS.HOME}/>}/>
				</Routes>
			</BrowserRouter>
		</Main>
	);
}

export default App;