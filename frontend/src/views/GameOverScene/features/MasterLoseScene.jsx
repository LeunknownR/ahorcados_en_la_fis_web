import khePasoMasterImg from "../../../images/khe_paso_master.png";
import { MainImage } from "../styles";
import Dialog from "../components/Dialog";
import { SideImageGroup, SideImageGroupItem } from "../components/SideImage";

const SideImage = ({
	gridArea
}) => {
	return (
		<SideImageGroupItem 
			gridArea={gridArea}
			src={khePasoMasterImg}
			alt="Khe pasó master"/>
	);
}
const MasterLoseScene = () => {
	return (
		<>
			<MainImage imageUrl={khePasoMasterImg}/>
			<Dialog alignment="justify">
				Khe pasó Master ¿¿¿ Khe pasó Master ¿¿¿ Khe pasó Master ¿¿¿ Khe
				pasó Master ¿¿¿ Khe pasó Master ¿¿¿ Khe pasó Master ¿¿¿ Khe pasó
				Master ¿¿¿ Khe pasó Master ¿¿¿ Khe pasó Master ¿¿¿ Khe pasó
				Master ¿¿¿ Khe pasó Master ¿¿¿ Khe pasó Master ¿¿¿ Khe pasó
				Master ¿¿¿ Khe pasó Master ¿¿¿ Khe pasó Master ¿¿¿ Khe pasó
				Master ¿¿¿ Khe pasó Master ¿¿¿ Khe pasó Master ¿¿¿ Khe pasó
				Master ¿¿¿ Khe pasó Master ¿¿¿
			</Dialog>
			<SideImageGroup>
				<SideImage gridArea="top"/>
				<SideImage gridArea="bottomleft"/>
				<SideImage gridArea="bottomright"/>
			</SideImageGroup>
		</>
	);
};

export default MasterLoseScene;
