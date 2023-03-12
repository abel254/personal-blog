import React from "react";
import SingleBlog from "../components/blogComponents/singleBlog/SingleBlog";
import { useBlogsContext } from "../context/BlogsContext";
import bItems from "../data/blog-items.json";

function Blogs() {
  const { blogItems } = useBlogsContext();


  const itemId = blogItems.map(item=> item.id)
  const id = Number(itemId.join(""));

  const item = bItems.find((item) => item.id === id);

  if(item === null) return null

  console.log(blogItems);
  

  return (
    <div>
      <SingleBlog/>
      {/* <h4>{item?.title}</h4>
      <img src={item?.image} alt="" />
      <p>{item?.date}</p>
      <p>{item?.time}</p>
      <p>{item?.description}</p> */}
    </div>
  );
}

export default Blogs;
