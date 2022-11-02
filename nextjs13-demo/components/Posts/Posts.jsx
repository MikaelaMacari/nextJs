import PostCard from "./PostCard";

const Posts = ({ posts }) => {
  return (
    <div className="container my-5">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
