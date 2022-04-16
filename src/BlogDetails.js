import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
const {id}= useParams();
console.log(id)
    return (  
        <div className="details">
            <h1>Blog Details of {id}</h1>
        </div>
    );
}
 
export default BlogDetails;