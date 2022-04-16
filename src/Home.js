import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading,setIsLoading]=useState(true);

  useEffect(()=>{
    
    setTimeout(()=>{
      fetch("http://localhost:8000/blogs")
          .then(res=>{
            return res.json();
          })
          .then(data=>{
            setBlogs(data);
            console.log(data);
            // To show that data is loading
            setIsLoading(false);
          })
          .catch((err)=>{
            console.log(err.message);
          })
    },1000)
  },[]);



  return (
    <div className="home">
      {isLoading && <div>Loading...</div>} 
      {blogs && <Bloglist blogs={blogs} maintitle="All Blogs!" />}

      {/* This Bloglist is filtering all the students with game ===cricket  */}
      {/* <Bloglist
        blogs={blogs.filter((eachBlog) => eachBlog.game === "cricket")}
        maintitle="Cricketers" deleteblog={deleteblog}
      /> */}

      <button >Like</button>
    </div>
  );
};

export default Home;
