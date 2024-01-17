import shinjiCongratulationsImg from "../../../../images/shinji_congratulations.png";
import { MainImage } from "../../styles";
import Dialog from "../Dialog";

const SoothsayerWinScene = () => {
	return (
		<>
			<MainImage imageUrl={shinjiCongratulationsImg} />
			<Dialog>
				Me odio. Pero, podría ser capaz de amarme a mí mismo. Podría
				quedarme aquí. Sí. No soy nada más que yo. Yo soy yo. Deseo ser
				yo. Deseo quedarme aquí como yo. ¡Puedo quedarme aquí como yo!
				¡Felicidades! ¡Muchas gracias! Gracias, padre mío. Adiós, mi
				madre. Y a todos los niños, ¡Felicidades!
			</Dialog>
		</>
	);
};

export default SoothsayerWinScene;
