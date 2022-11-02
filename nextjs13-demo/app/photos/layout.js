const PhotosLayout = ({ children }) => {
  return (
    <div className="container">
      <h1 className=" text-warning pt-5">Photos</h1>
      {children}
    </div>
  );
};
export default PhotosLayout;
