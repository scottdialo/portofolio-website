import React from "react";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
          Below are some of the Projects I worked on using variety of skills
          such as: <br></br>
          <b>
            {" "}
            ReactJs, Javascript, NodeJs, Ejs, Api integration and extensive
            knowledge of CSS.
          </b>{" "}
          <br></br>
          <b>Katenga: </b> is a pro bono project 
          and it's still in progress...
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
