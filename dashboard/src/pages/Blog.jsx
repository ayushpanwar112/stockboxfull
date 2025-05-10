import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBlog } from "../features/Actions/blogActions";

const  SingleBlog = () => {
  const { id } = useParams(); // Get the  singleBlog ID from the URL
  const dispatch = useDispatch();
  const {  singleBlog, loading, error } = useSelector((state) => state.blog); // Access  singleBlog data from Redux

  useEffect(() => {
    dispatch(getSingleBlog(id)); // Fetch the  singleBlog by ID
  }, [dispatch, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message || "Failed to load  singleBlog"}</div>;
  }

  if (! singleBlog) {
    return <div> singleBlog not found</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-4">{ singleBlog.title}</h1>
      <img
        src={ singleBlog.thumbImage?.secure_url || "https://via.placeholder.com/800"}
        alt={ singleBlog.title}
        className="w-full h-auto rounded-md mb-4"
      />
      <p className="text-gray-700">{ singleBlog.content}</p>
      <div className="mt-4 text-sm text-gray-500">
        Published on {new Date( singleBlog.publishedAt).toLocaleDateString()}
      </div>
    </div>
  );
};

export default  SingleBlog;