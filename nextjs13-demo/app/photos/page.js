import Images from "../../components/photos/Images";

const PhotosPage = async () => {
  const images = await (await fetch("https://jsonplaceholder.typicode.com/photos")).json();
  return <Images images={images} />;
};
export default PhotosPage;
