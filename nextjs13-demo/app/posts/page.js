import Posts from "../../components/Posts/Posts";

const PostsPage = async () => {
  const posts = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
  return <Posts posts={posts} />;
};
export default PostsPage;
