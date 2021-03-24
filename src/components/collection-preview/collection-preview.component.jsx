import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss"

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1>{title}</h1>
    <div className="preview">
      {items
        .filter((_, idx) => idx < 4)
        .map(({id, ...otherCollectionItemProps}) => (
          <CollectionItem key={id} {...otherCollectionItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
