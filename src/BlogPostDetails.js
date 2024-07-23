import React from "react";
import { useParams, Link } from "react-router-dom";

const BlogPostDetails = ({ posts }) => {
  const { id } = useParams();
  const post = posts[id];

  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      {post.urlToImage && <img src={post.urlToImage} alt={post.title} />}
      <p>{post.content}</p>
      <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default BlogPostDetails;
