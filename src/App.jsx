


// import './App.css';
// import Nave from './Nave/Nave';
// import Footer from './Footer/Footer';
// import { useState } from 'react';

// function App() {
//   const [isActive, setIsActive] = useState({
//     cart: true,
//     status: "cart"
//   });

//   const handleIsActiveState = (status) => {
//     if (status === "cart") {
//       setIsActive({
//         cart: true,
//         status: "cart"
//       });
//     } else {
//       setIsActive({
//         cart: false,
//         status: "about"
//       });
//     }
//   };

//   console.log(isActive);



// const [selectedProducts,setSelectedProducts]=useState([]);



// const handleSelectedProduct = (product) =>{





//  const  isExist=selectedProducts.find((p)=>p.id== product.id);


//   if(isExist){
//    alert("already isExist")
//   }
//   else{
//    const newProducts=[...selectedProducts,product];
//    setSelectedProducts(newProducts);
//   }

// // selectedProducts(newProducts)

// }
// console.log(selectedProducts);


//   return (
//     <>
//       <Nave selectedProducts={selectedProducts.length} isActive={isActive} handleIsActiveState={handleIsActiveState}  handleSelectedProduct={ handleSelectedProduct}  ></Nave>

      
      

//       <Footer></Footer>
//     </>
//   );
// }

// export default App;













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
    setIsActive({
      cart: status === "cart",
      status
    });
  };

  const [selectedProducts, setSelectedProducts] = useState([]);



  const [price,setPrice]=useState(5);


  const handleIncreasePrice=(pr) =>{
    setPrice(price+pr)

  }
  const handleDelatePrice=(id) =>{
    const product=selectedProducts.find((p)=>p.id==id);
    setSelectedProducts(product.price-price) 

  }


  const handleDelate=(id)=>{
    handleDelatePrice(id)
    const newProduct=selectedProducts.filter((p)=>p.id!=id);
    setSelectedProducts(newProduct);

  }

  const handleSelectedProduct = (product) => {
    const isExist = selectedProducts.find((p) => p.id === product.id);

    if (isExist) {
      alert("Product already exists");
    } else {
      handleIncreasePrice(product.price)
      const newProducts = [...selectedProducts, product];
      setSelectedProducts(newProducts);
    }
  };

  return (
    <>
      <Nave 
        selectedProducts={selectedProducts} 
        isActive={isActive} 
        handleIsActiveState={handleIsActiveState}  
        handleSelectedProduct={handleSelectedProduct} 
        handleDelate={handleDelate}
        price={price}
      />
      <Footer />
    </>
  );
}

export default App;





































































