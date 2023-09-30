import React from "react";

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={props.onClose}>
          X
        </button>
        {props.content}
      </div>
    </div>
  );
}

export default Popup;