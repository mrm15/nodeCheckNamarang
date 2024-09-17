import TableSection from "../TableSection/TableSection.jsx";
import PictureSection from "../PictureSection/PictureSection.jsx";
import ToolbarSection from "../ToolbarSection/ToolbarSection.jsx";
import ScreenshotButton from "../ScreenShotButton/ScreenShotButton.jsx";
import NeonData from "../NeonData/NeonData.jsx";
import FactorListFromHesabfa from "../FactorListFromHesabfa/FactorListFromHesabfa.jsx";
import TableSection2 from "../TableSection2/TableSection2.jsx";

const ProductNode = () => {
  return (<div>

    <FactorListFromHesabfa />
    <ToolbarSection/>
    {/*<NeonData />*/}

    <div
      id={'i_want_to_take_screenshot_here'}
      className={'p-5 flex flex-col items-center'}
    >
      <PictureSection/>
      {/*<TableSection/>*/}
      <TableSection2/>
    </div>
    <ScreenshotButton/>


  </div>);
};

export default ProductNode;
