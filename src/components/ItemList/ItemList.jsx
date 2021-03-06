import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ items, selectItem }) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-wrap w-100">
        {items.map((item) => {
          return (
            <Item
              selectItem={selectItem}
              key={item.id}
              id={item.id}
              category={item.category}
              name={item.name}
              stock={item.stock}
              img={item.img}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
