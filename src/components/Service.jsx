import { Link } from "react-router-dom";
import '../assets/css/service.css'

export const Service = (props) => {
  const {image, title} = props.service;
  return (
    <>
      <div className="col-sm-3">
        <Link to={`/services/${title}`} className="service__card">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <img src={image} alt="service image" className="mb-2 service__image"/>
          <h3 className="service__title">{title}</h3>
        </div>
        </Link>
      </div>
    </>
  )
}