const BlogList = (props) => {
  const blogs = props.blogs;
  const maintitle = props.maintitle;

  // const deleteblog = props.deleteblog;

  return (
    <div className="blog-list">
      <h2>{maintitle}</h2>
      {blogs.map((eachBlog) => (
        <div className="blog-info" key={eachBlog.id}>
          <h2>{eachBlog.title}</h2>
          <p>Age is {eachBlog.age}</p>
          <p>Game playFed : {eachBlog.game}</p>

          {/* <button onClick={() => deleteblog(eachBlog.id)}>Delete</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
