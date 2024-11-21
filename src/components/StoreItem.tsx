import React from "react";

type StoreItemProp = {
    id:number,
    name:string,
    price:number,
    imageUrl:string,
 };
}

const StoreItem = ({ id, name, price, imageUrl } : StoreItemProp) => {
  return <div></div>;
};

export default StoreItem;
