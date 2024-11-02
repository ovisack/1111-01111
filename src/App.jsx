


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
const [selectedProducts,setSelectedProducts]=useState([]);


const handleSelectedProduct = (product) =>{
 const  isExist=selectedProducts.find((p)=>p.id== product.id);

 if(isExist){
  alert("already isExist")
 }
 else{
  const newProducts=[...selectedProducts,product];
  setSelectedProducts(newProducts);
 }











}
   console.log(selectedProducts);

  return (
    <>
      <Nave selectedProducts={selectedProducts.length} isActive={isActive} handleIsActiveState={handleIsActiveState}  handleSelectedProduct={ handleSelectedProduct}  ></Nave>

      
      

      <Footer></Footer>
    </>
  );
}

export default App;





































































