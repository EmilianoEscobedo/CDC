import { Link } from 'react-router-dom'
import '../assets/css/experience.css'

export const Experience = (props) => {
  const {image, title} = props.experience;
  return (
    <div className='col-md-6 mb-4'>
          <Link to={`/experiences/${title}`}>
            <div className='position-relative d-flex justify-content-center align-items-center'>
              <img src={image} className='experience__image' alt='project image'/>
              <p className='experience__title'> {title} </p>
            </div>
          </Link>
    </div>
  )
}
