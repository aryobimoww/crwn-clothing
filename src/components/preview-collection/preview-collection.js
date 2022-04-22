import React from "react";
import CollectionItems from "../collection-items/collection-items";
import "./preview-collection.scss";

const PreviewCollection = ({ title, items }) => (
  <div className="preview-collection">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItem }) => (
          <CollectionItems key={id} {...otherItem} />
        ))}
    </div>
  </div>
);
export default PreviewCollection;
