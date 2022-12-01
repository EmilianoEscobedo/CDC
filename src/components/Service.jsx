import { Link } from "react-router-dom";
export const Service = (props) => {
  const {image, title} = props.service;
  return (
    <>
      <div className="col-sm-3">
        <Link to={`/services/${title}`}>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <img src={image} alt="service image" />
          <h2>{title}</h2>
        </div>
        </Link>
      </div>
    </>
  )
}