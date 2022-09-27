import React from "react";
import background from "../../../assets/Pasar-Rakyat/produk/detail-produk-background.svg";
import block1 from "../../../assets/Pasar-Rakyat/produk/block1.svg";
import block2 from "../../../assets/Pasar-Rakyat/produk/block2.svg";

 
const Popup = props => {
  return (
      <div className="popup-box">
        <div className="box">
          <img src={block1} alt="block1" className="absolute top-0 left-0 z-0"/>
          <span className="close-icon" onClick={props.handleClose}>x</span>
          {props.content}
          <img src={block2} alt="block2" className="absolute bottom-0 right-0"/>
        </div>
      </div>
  );
};
 
export default Popup;