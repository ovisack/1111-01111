

import Blog from './blog/Blog';
import './App.css'
import Nave from './Nave/Nave'
import Footer from './Footer/Footer';
import { useState } from 'react';
// import Cart from './Status/cart';
// import About from './About/About';


function App() {


  const [isActive, setIsActive] = useState({
    cart:true,
    status:"cart"

  })
  
const handleIsActiveState =(status)=>{
  if(status ==="cart"){
    setIsActive({
      cart:true,
      status:"cart"
    })
  }
  else{
    setIsActive({
      cart:false,
      status:"about"
    })
  }

}
console.log(isActive);

  return (
    <>

   

    <Nave isActive={isActive} handleIsActiveState ={handleIsActiveState }></Nave>
{/*     
    isActive={isActive} handleIsActiveState ={handleIsActiveState } */}

<Blog ></Blog>

<Footer></Footer>
{/* <Cart> </Cart> 
 <About></About>  */}


  
    
    </>
  )
}

export default App ;


