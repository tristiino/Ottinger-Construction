import React, { useState, useEffect } from 'react';
import { client } from '../sanityClient';
import '../App.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(3);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.title = "Blog | Ottinger Construction"; // ✅ Update Title

    client
      .fetch('*[_type == "blog"] | order(timestamp desc) {title, description, "beforeImage": beforeImage.asset->url, "afterImage": afterImage.asset->url}')
      .then((data) => setBlogs(data))
      .catch(console.error);
  }, []);

  return (
    <div className="blog-container">
      <h1>Ottinger Construction Blog</h1>
      {blogs.slice(0, visibleBlogs).map((blog, index) => (
        <div key={index} className="blog-post">
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <div className="blog-images">
            <div className="image-container" onClick={() => setSelectedImage(blog.beforeImage)}>
              <h3>Before</h3>
              <img src={blog.beforeImage} alt="Before" />
            </div>
            <div className="image-container" onClick={() => setSelectedImage(blog.afterImage)}>
              <h3>After</h3>
              <img src={blog.afterImage} alt="After" />
            </div>
          </div>
        </div>
      ))}
      {visibleBlogs < blogs.length && (
        <button className="load-more" onClick={() => setVisibleBlogs(visibleBlogs + 3)}>Load More</button>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full Size" />
        </div>
      )}
    </div>
  );
};

export default Blog;
