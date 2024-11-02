

import React from "react";


export default function About({selectedProducts}){

    return (
      <>
        <div className="bg-black w-72 h-36">

          {
          selectedProducts.map((product)=>(
            <div key={product.id} className="text-white">
               <img src={product.img} alt="" />
                      <p>name:</p>
                      <p>price </p>

               </div>
               
            ))
          }
        </div>
        </>
    );
};

