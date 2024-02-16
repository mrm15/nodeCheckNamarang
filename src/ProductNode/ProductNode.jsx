import TableSection from "../TableSection/TableSection.jsx";
import PictureSection from "../PictureSection/PictureSection.jsx";
import ToolbarSection from "../ToolbarSection/ToolbarSection.jsx";
import ScreenshotButton from "../ScreenShotButton/ScreenShotButton.jsx";

const MyComponent = () => {
  return (<div>

    <ToolbarSection/>

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
