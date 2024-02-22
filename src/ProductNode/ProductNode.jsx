import TableSection from "../TableSection/TableSection.jsx";
import PictureSection from "../PictureSection/PictureSection.jsx";
import ToolbarSection from "../ToolbarSection/ToolbarSection.jsx";
import ScreenshotButton from "../ScreenShotButton/ScreenShotButton.jsx";
import NeonData from "../NeonData/NeonData.jsx";

const MyComponent = () => {
  return (<div>

    <ToolbarSection/>
    <NeonData />

    <div
      id={'i_want_to_take_screenshot_here'}
      className={'p-5 flex flex-col items-center'}
    >
      <PictureSection/>
      <TableSection/>
    </div>
    <ScreenshotButton/>


  </div>);
};

export default MyComponent;
