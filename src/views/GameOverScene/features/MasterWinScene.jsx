import gendoIkariImg from "../../../images/gendo_ikari.png";
import seeleImg from "../../../images/seele.png";
import { MainImage } from "../styles";
import Dialog from "../components/Dialog";
import { SideImage } from "../components/SideImage";

const MasterWinScene = () => {
	return (
		<>
			<MainImage imageUrl={gendoIkariImg} />
			<Dialog>
				Los humanos olvidan su insensatez y repiten sus errores. Si los
				seres humanos no se redimen voluntariamente, no cambiarán. No
				tenemos más remedio que hacer cambios con nuestras propias
				manos. Sobre el firmamento estrellado Dios juzga, como nosotros
				juzgamos.
			</Dialog>
			<SideImage imageUrl={seeleImg}/>
		</>
	);
};

export default MasterWinScene;
