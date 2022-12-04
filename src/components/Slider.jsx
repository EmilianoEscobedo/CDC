import { useDataContext } from "../contexts/DataContext"
import '../assets/css/slider.css'

export const Slider = () => {
  const {imgSlider} = useDataContext();
  return (
    <div className="slider__container">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active ">
              <img src={imgSlider && imgSlider[0].image} className="slider__img img-fluid" alt="image slider 1" />
            </div>
            <div className="carousel-item">
              <img src={imgSlider && imgSlider[1].image} className="slider__img img-fluid" alt="image slider 2" />
            </div>
            <div className="carousel-item">
              <img src={imgSlider && imgSlider[2].image} className="slider__img img-fluid" alt="image slider 3" />
            </div>
          </div>
          <h1 className="slider__title fw-bold">La forma inteligente <br/> de construir.</h1>
      </div>
  </div>
  )
}
