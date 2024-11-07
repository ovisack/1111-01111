import { useEffect, useState } from "react";
import Cart from "./cart";




const Blog = ({ handleSelectedProduct,selectedProducts }) => {
    const [post,setPost]= useState([]);

    useEffect(()=>{
        fetch("./data.json")
        .then(res => res.json())
        .then(data=>setPost(data))
    },[])
    return (
        <div className=" flex  ">
        
      <div className="grid  md:grid-cols-3 md:gap-14 mt-5 m-14  ">
            {
                post.data?.map(posts=> <Cart selectedProducts={selectedProducts}  handleSelectedProduct={ handleSelectedProduct}   key={posts.id} posts={posts}></Cart>)
            }
            </div>
        </div>
    );
};

export default Blog;


