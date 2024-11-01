


import './App.css';
import Nave from './Nave/Nave';
import Footer from './Footer/Footer';
import { useState } from 'react';

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart"
  });

  const handleIsActiveState = (status) => {
    if (status === "cart") {
      setIsActive({
        cart: true,
        status: "cart"
      });
    } else {
      setIsActive({
        cart: false,
        status: "about"
      });
    }
  };

  console.log(isActive);

  return (
    <>
      <Nave isActive={isActive} handleIsActiveState={handleIsActiveState} ></Nave>

      
      

      <Footer></Footer>
    </>
  );
}

export default App;





































































