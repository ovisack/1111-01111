

// import PropTypes from 'prop-types';
// import { useState } from 'react';


// const Blogs = ({blog}) => {


//   const [adds,setAdds] =useState(0);

//   const Add= ()=>{
//     const newPost=adds-180000;
//     setAdds(newPost)
//   }
//     const {name,img,country,role,batting_style,price,rating}= blog;
//     return (
//         <>
//    <section className=' '>   
//        <div className=" card bg-base-100    shadow-xl ">
//   <figure>
//   <img src={img} alt={`hi${name}`} />
   
//   </figure>
//   <div className="card-body ">
//     <div className=" flex gap-7 "><h2><img className='w-10' src="https://img.icons8.com/?size=100&id=23264&format=png&color=000000" alt="" /></h2>    <h2 className="card-title">
//     {name}
      
    
//     </h2></div>

//    <div className='flex justify-between'> <h2 className='flex gap-5'><h2><img  className='w-7' src="https://img.icons8.com/?size=100&id=61511&format=png&color=000000" alt="" /></h2>{country}</h2> <h2>{role}</h2></div> 
//     <hr/>
//     <p>Rating:</p>
//     <br/>
//     <div> <h1 className='flex justify-between'>Left-Hand Bat:<h2>{batting_style}</h2></h1>
    
//     <h2>Price:{price} </h2></div>
//     <div className=" justify-end">

//       <button onClick={Add} >Choose Player</button>
//       <h1>taka:{adds}</h1>
//     </div>
//   </div>
// </div>
// </section>

  

// </>
//     );
// };

//     Blogs.propTypes={
//         blog: PropTypes.object.isRequired
//     }


// export default Blogs;