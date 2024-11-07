
// import './hero.css'
// // import Cart from '../blog/cart';
// import About from '../About/About';
// import { useState } from 'react';
// import Blog from '../blog/Blog';


// function Nave ({handleSelectedProduct,selectedProducts}){


//     const [isActive,setIsActive]=useState("cart")

// const handleIsActiveState =(status) =>{
//     setIsActive(status)
// };






//     return (
//     <>
//                 <div className=' bg-slate-500 md:h-32 md:w-screen'>


 
//   <div className=' flex  md:gap-10 sm:gap-5 lg:gap-10 md:mx-28 md:pt-11 bg-slate-500 '>
//   <img className='md:-mt-5 ml- ' src="https://i.ibb.co.com/8jx3cmr/logo.png" alt="" /> 

// <h1 className='md:ml-96 md:font-bold md:text-2xl'>Home </h1> <h1 className='md:font-bold md:text-2xl'>Fixture</h1> <h1 className='md:font-bold md:text-2xl'>Teams</h1> <h1 className='md:font-bold md:text-2xl'>Schedules:{selectedProducts}</h1> 
// <span className='md:flex md:font-bold md:text-2xl' >{}: Coin <img className='md:w-7 h-7' src="https://img.icons8.com/?size=100&id=sPBQkuep9vDA&format=png&color=000000" alt="" /></span>

// </div>
// </div>

// <div className="flex  justify-center w-screen h-[500px]   boxs ">
        
// <div className=""> 
//     <div className=' md:ml-72'><img className=''  src="https://i.ibb.co.com/XWbvNW3/banner-main.png" alt="" /></div>

// <h1 className='text-4xl font-bold text-gray-500'>Assemble Your Ultimate Dream 11 Cricket Team</h1><br/>
// <p className='font-bold text-2xl text-gray-500 md:ml-40'>Beyond Boundaries Beyond Limits</p> 

// <br/><button  className='bg-yellow-300 n w-40 md:ml-64'>Claim Free Credit</button>



//  </div>
//  <div> 
// </div>
 

// </div>


// <div className="md:flex md:justify-end md:mt- gap-5">
//          <button onClick={()=>handleIsActiveState("cart")} className="btn bg-black  btn-ghost">Available</button>
//         <button onClick={()=>handleIsActiveState("about")} className="btn btn-active bg-black btn-ghost">Selected (0)</button>
        
     
//           </div>

// <div className="flex" >{isActive==="cart"?<Blog selectedProducts={selectedProducts}  handleSelectedProduct={ handleSelectedProduct}  ></Blog>: <About selectedProducts={selectedProducts}></About>}</div>
    

       
        
   

// </>
        




    
//    );
// };




// export default Nave;














import './hero.css';
import About from '../About/About';
import Blog from '../blog/Blog';

function Nave({ handleSelectedProduct, selectedProducts, handleIsActiveState, isActive,handleDelate,price,ClaimPrices }) {


  return (
    <>
      <div className='bg-slate-500 md:h-32 md:w-screen'>
        <div className='flex md:gap-10 sm:gap-5 lg:gap-10 md:mx-28 md:pt-11 bg-slate-500'>
          <img className='md:-mt-5' src="https://i.ibb.co.com/8jx3cmr/logo.png" alt="logo" />
          <h1 className='md:ml-96 md:font-bold md:text-2xl'>Home</h1>
          <h1 className='md:font-bold md:text-2xl'>Fixture</h1>
          <h1 className='md:font-bold md:text-2xl'>Teams</h1>
         
          <span className='md:flex md:font-bold md:text-2xl'>Coin{price}<img className='md:w-7 h-7' src="https://img.icons8.com/?size=100&id=sPBQkuep9vDA&format=png&color=000000" alt="coin" /></span>
        </div>
      </div>

      <div className="flex justify-center w-screen h-[500px] boxs">
        <div>
          <img className='md:ml-72' src="https://i.ibb.co.com/XWbvNW3/banner-main.png" alt="banner" />
          <h1 className='text-4xl font-bold text-gray-500'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className='font-bold text-2xl text-gray-500 md:ml-40'>Beyond Boundaries Beyond Limits</p>
          <button onClick={()=>ClaimPrices (price)} className='bg-yellow-300 w-40 h-16 mt-8 rounded-full md:ml-64'>Claim Free Credit</button>
        </div>
      </div>

      <div className="md:flex md:justify-end gap-5">
        <button onClick={() => handleIsActiveState("cart")} className="btn bg-black btn-ghost">Available</button>
        <button onClick={() => handleIsActiveState("about")} className="btn btn-active bg-black btn-ghost">
          Selected ({selectedProducts.length})
        </button>
        
      </div>
<div> <h1 className='md:font-bold md:text-2xl'>Selected Player{selectedProducts.length}</h1></div>
      <div className="flex w-screen h-screen  md:ml-24">
        {isActive.status === "cart" ? (
          <Blog selectedProducts={selectedProducts} handleSelectedProduct={handleSelectedProduct} />
        ) : (
          <About  selectedProducts={selectedProducts} handleDelate={handleDelate} />
        )}
      </div>
    </>
  );
}

export default Nave;



























































