import React, { useRef, useState } from "react";
import { useDrag } from "react-dnd";
import DropZone from "./DropZone";
import Column from "./Column";
import { ROW } from "../constants";
import { Resizable } from "re-resizable";

const style = {};
const Row = ({ data, components, handleDrop, path }) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    type: ROW,
    item: {
      type: ROW,
      id: data.id,
      children: data.children,
      path
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const renderColumn = (column, currentPath) => {
    return (
      <Resizable
        enable={{ top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
      >
        <Column
          key={column.id}
          data={column}
          components={components}
          handleDrop={handleDrop}
          path={currentPath}
        />
      </Resizable>
    );
  };

  return (
    <div ref={ref} style={{ ...style, opacity }} className="base draggable row">
      {data.id}
      <div className="columns">
        {data.children?.map((column, index) => {
          const currentPath = `${path}-${index}`;

          return (
            <React.Fragment key={column.id}>
              <DropZone
                data={{
                  path: currentPath,
                  childrenCount: data.children?.length,
                }}
                onDrop={handleDrop}
                className="horizontalDrag"
              />
              {renderColumn(column, currentPath)}
            </React.Fragment>
          );
        })}
        <DropZone
          data={{
            path: `${path}-${data.children?.length}`,
            childrenCount: data.children?.length
          }}
          onDrop={handleDrop}
          className="horizontalDrag"
          isLast
        />
      </div>
      <DropZone
          data={{
            path: `${path}-${data.children?.length}`,
            childrenCount: data.children?.length
          }}
          onDrop={handleDrop}
          className="horizontalDrag"
          isLast
        />
    </div>
  );
};
export default Row;