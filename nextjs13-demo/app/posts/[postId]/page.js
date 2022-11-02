import React from "react";

const fetchPost = async (id) => {
  const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return postResponse.json();
};
const PostDetailsPage = async ({ params, searchParams }) => {
  const { postId } = params;
  const post = await fetchPost(postId);
  return (
    <div className="container py-5">
      <h1 className="text-success">{post.title}</h1>
      <p className="text-muted">{post.body}</p>
    </div>
  );
};

export default PostDetailsPage;
