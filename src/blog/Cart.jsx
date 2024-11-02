// import {  useState } from "react";
// import { useEffect,  } from "react";


// import '/prozet/B10-A7-projet/package.json'





// const cart = () => {

//    const [data,setdata]=useState([]);
    


//    useEffect(()=> {
//     fetch('data.json')
//     .then(res=> res.json())
//     .then(data=>console.log(data))
//   },[])

//     return (
//         <div>
            

//             <h1>cart.jsx</h1>
//             <img src="https://i.ibb.co.com/8xpHHyk/images-1.jpg" alt="" />
       
//         </div>
//     );
// };

// export default cart;

















// import { useState } from 'react';
import './cart.css'



const Cart = ({posts,handleSelectedProduct}) => {
  //  console.log(handleSelectedProduct); 

//
  
    const {name,img,country,role,batting_style,price,rating}= posts;
    
    



   
    
    return (
        <>



       
   
       <div className=" card  bg-base-100  shadow-xl cart ">
  <figure>
  <img className=' w-96 h-64' src={img} alt={`hi${name}`} />
 
   
  </figure>
  <div className="card-body ">
    <div className=" flex gap-7 "><h2><img className='w-10' src="https://img.icons8.com/?size=100&id=23264&format=png&color=000000" alt="" /></h2>    <h2 className="card-title">
    {name}
    
    
    </h2></div>

   <div className='flex justify-between'> <h2 className='flex gap-5'><h2><img  className='w-7' src="https://img.icons8.com/?size=100&id=61511&format=png&color=000000" alt="" /></h2>{country}</h2> <h2>{role}</h2></div> 
    <hr/>
    <p>Rating:</p>
    <br/>
    <div> <h1 className='flex justify-between'>Left-Hand Bat:<h2>{batting_style}</h2></h1> 
    <br/>
    <div className='flex justify-between'>
    <h2>Price:{price} </h2> <button  onClick={() =>handleSelectedProduct (posts)} className="btn btn-active">Choose Player</button>
    </div>
    </div>
  
  </div>
</div>


  

</>
    );
};


export default Cart;