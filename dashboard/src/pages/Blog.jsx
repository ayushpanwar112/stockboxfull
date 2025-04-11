import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/fetch-blog/${id}`);
        setBlogData(response.data);
      } catch {
        setError("Error fetching blog data");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);

  if (loading) {
    return <div className="text-center text-gray-500 font-bold mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 font-bold mt-10">{error}</div>;
  }

  if (!blogData) {
    return <div className="text-center text-red-500 font-bold mt-10">Blog not found!</div>;
  }

  // Extract the first image
  const imageMatch = blogData.content.match(/<img.*?>/);
  const firstImage = imageMatch ? imageMatch[0] : null;
  const defaultImage = '<img src="path/to/default-image.jpg" alt="Default Image" />';

  // Remove the first image from the content
  const updatedContent = firstImage ? blogData.content.replace(firstImage, "") : blogData.content;

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{blogData.title}</h1>
      <p className="text-gray-600 mb-4">Published on: {new Date(blogData.published).toDateString()}</p>

      {/* Render extracted image separately */}
      <div className="w-full flex justify-center mb-5" dangerouslySetInnerHTML={{ __html: firstImage || defaultImage }} />

      {/* Render content without the first image */}
      <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: updatedContent }}></div>

      {/* Blog Source Link */}
      {blogData.url && (
        <a
          href={blogData.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-5 text-blue-500 hover:underline"
        >
          Read more on the original blog
        </a>
      )}
    </div>
  );
};

export default Blog;
