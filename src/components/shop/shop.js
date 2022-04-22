import React from "react";
import SHOP_DATA from "./shopData";
import PreviewCollection from "../preview-collection/preview-collection";
class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colleections: SHOP_DATA,
    };
  }
  render() {
    const { colleections } = this.state;
    return (
      <div className="shop-page">
        {colleections.map(({ id, ...otherCollection }) => (
          <PreviewCollection id={id} {...otherCollection} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
