const Card = ({ url, title }) => {
  return (
    <div className="card col-lg-2 col-md-4 col-sm-3 col-12">
      <img src={url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

export default Card;
