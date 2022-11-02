import React from "react";
import Link from "next/link";
const PostCard = ({ post }) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <Link href={`posts/${post.id}`} className="btn btn-primary">
          See post
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
