import { useEffect, useState } from "react";
import Cart from "./cart";




const Blog = () => {
    const [post,setPost]= useState([]);

    useEffect(()=>{
        fetch("./data.json")
        .then(res => res.json())
        .then(data=>setPost(data))
    },[])
    return (
        <div className=" flex  ">
            <h3>name:{post.length}</h3>
      <div className="grid  md:grid-cols-3 md:gap-14 m-14 mt-28 ">
            {
                post.map(posts=> <Cart key={posts.id} posts={posts}></Cart>)
            }
            </div>
        </div>
    );
};

export default Blog;


