import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "../../shop_data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop">
        {collections
        
          .map(({ id, ...OtherCollectionProps }) => (
            <CollectionPreview key={id} {...OtherCollectionProps} />
          ))}
      </div>
    );
  }
}

export default ShopPage;
