import React from "react";
import { useDrag } from "react-dnd";
import { SIDEBAR_ITEM } from "../constants";

const SideBarItem = ({ data }) => {
  const handlePopup = itemId => {
    alert(`The item's id: ${itemId}`);
  }

  const [{ opacity }, drag] = useDrag({
    type: SIDEBAR_ITEM,
    item: data,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    })
  });
  
  return (
    <div className="sideBarItem" ref={drag} style={{ opacity }} onClick={() => handlePopup(data.id)}>
      {data.component.type}
    </div>
  );
};
export default SideBarItem;