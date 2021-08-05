import React from 'react';
import ReactDOM from 'react-dom';
import ProductDesc from './ProductDesc';
import ShareIcons from './ShareIcons';

let ProductInformation = (props) => {

  return (
    <div className="productInfo">
      <span className="category">{props.productInfo.category}</span>
      <span className="productName">{props.productInfo.name}</span>
      <ShareIcons />
      <ProductDesc
        slogan={props.productInfo.slogan}
        desc={props.productInfo.description}
        features={
          props.productInfo.features.length > 0
            ? props.productInfo.features
            : null
        }
      />
    </div>
  );

};

export default ProductInformation;
