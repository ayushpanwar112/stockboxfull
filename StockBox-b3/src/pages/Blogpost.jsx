import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Blogpost = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    async function fetchBlogData() {
      try {
       
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/fetch-blog/${id}`);
        setBlogData(res.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    }
    fetchBlogData();
  }, [id]);

  if (!blogData) {
    return <div className="text-center text-red-500 font-bold mt-10">Blog not found!</div>;
  }

  // Extract the first image
  const imageMatch = blogData.content.match(/<img.*?>/);
  const firstImage = imageMatch ? imageMatch[0] : null;

  // Remove the first image from the content
  const updatedContent = firstImage ? blogData.content.replace(firstImage, "") : blogData.content;

  // Generate share URLs
  const shareUrl = window.location.href;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${blogData.title}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${shareUrl}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${blogData.title}`;

  return (
    <div className="max-w-3xl mx-auto p-5 bg-amber-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{blogData.title}</h1>
      <p className=" mb-4">Published on: {new Date(blogData.published).toDateString()}</p>

      {/* Render extracted image separately */}
      {firstImage && (
        <div className="w-full flex justify-center mb-5 " dangerouslySetInnerHTML={{ __html: firstImage }} />
      )}

      {/* Render content without the first image */}
      <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: updatedContent }}></div>

      {/* Social Media Share Buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer" className="text-green-500">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
        <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Blogpost;
