import { useEffect, useState } from "react";
// import Blogs from "../Blogs/Blogs";
import Cart from "../Status/cart";
// import About from "../About/About";



const Blog = () => {


    const [post, setPost]= useState([]);
    


useEffect(()=> {
  fetch('/public/data.json')
  .then(res=> res.json())
  .then(data=>setPost(data))
},[])

    return (
        <>
        <h1>Available Players</h1>

   
        <div className=" md:grid md:grid-cols-3 mt-10 gap-14 ">





       

        {
            
            post.map(blog=><Cart key={blog.id} 
               blog={blog}></Cart>)
               
       }




            
        </div>

        </>
    );
};

export default Blog;



