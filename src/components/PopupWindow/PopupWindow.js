import { useState } from "react";
import { Button } from "reactstrap";

import "./PopupWindow.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner rounded-4">
        <Button close color="primary" onClick={() => props.setTrigger(!props.trigger)} />
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

const PopupWindow = () => {
  const [isPopup, setIsPopup] = useState(true);

  return (
    <>
      <div className="popup-window">
        <Popup trigger={isPopup} setTrigger={setIsPopup}>
          <h5>There is an unfinished section!</h5>
          <p>The content of Resume (Experiences) isn't yet complete.</p>
        </Popup>
      </div>
    </>
  );
};

export { Popup };
export default PopupWindow;
