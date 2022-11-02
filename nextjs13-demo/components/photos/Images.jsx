import Card from "./Card";
const Images = ({ images }) => {
  return (
    <>
      <div className="container my-5">
        <div className="row gap-3">
          {images.map((image) => {
            {
              if (image.id <= 30) {
                return <Card key={image.id} url={image.url} title={image.title} />;
              }
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Images;
