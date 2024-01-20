import shinjiLamentsImg from "../../../images/shinji_laments.png";
import shinjiEvaDamagedImg from "../../../images/shinji_eva_damaged.png";
import { MainImage } from "../styles";
import Dialog from "../components/Dialog";
import { SideImage } from "../components/SideImage";

const SoothsayerLoseScene = () => {
	return (
		<>
			<MainImage imageUrl={shinjiLamentsImg} />
			<Dialog>
				Albion Online es un MMORPG no lineal multiplataforma ambientado
				en un mundo de fantasía medieval. El juego cuenta con una
				economía impulsada por los jugadores en la que casi todos los
				objetos son fabricados por ellos. Combina las armas y armaduras
				que le convengan a tu estilo de juego en un sistema único y sin
				clases en donde “eres lo que llevas”. Explora el mundo,
				enfréntate a otros aventureros en emocionantes batallas,
				conquista territorios y construye un hogar.
			</Dialog>
			<SideImage imageUrl={shinjiEvaDamagedImg}/>
		</>
	);
};

export default SoothsayerLoseScene;
