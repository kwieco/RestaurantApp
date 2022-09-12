import React from "react";
import Itemcard from "./Itemcard";
import datas from "./datas";

const Menu = () => {
  console.warn(datas.productData);
  return (
    <>
      <h1 className="text-center mt-3">Main dishes</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {datas.productData.map((item, index) => {
            return (
              <Itemcard key={index} 
                        img={item.img} 
                        title={item.title} 
                        desc={item.desc} 
                        price={item.price} 
                        item={item} />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Menu;
