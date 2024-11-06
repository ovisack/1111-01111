




export default function About({selectedProducts=[],handleDelate}){
  
  

    return (
      <>
  
               
         <div className="w-44 h-32 ">
        
          
          
          {selectedProducts.length> 0 ?(
            selectedProducts.map((product) =>(
              <div key={product.id}> {product.name|| "Product Name"}
              
              <div className=" flex " >
                <img src={product.img} alt="" />
              <button onClick={()=>handleDelate(product.id)} className="ml-96 btn w-32 bg-yellow-300 ">Delete</button>
              </div>
              
              </div>
              
            )
           )):(<p>No product</p>)}
            
            
            </div> 
          
        
      
        </>
    );
};

