import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BlogPostList = ({ posts }) => {
  if (!posts.length) return <div>Loading...</div>;

  return (
    <div className="d-flex flex-wrap justify-content-around">
      {posts.map((post, index) => (
        <Card key={index} style={{ width: "18rem", margin: "1rem" }}>
          {post.urlToImage && (
            <Card.Img variant="top" src={post.urlToImage} alt={post.title} />
          )}
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.description}</Card.Text>
            <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            <Link to={`/post/${index}`}>
              <Button variant="primary">Read More</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default BlogPostList;
