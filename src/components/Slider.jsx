import { useDataContext } from "../contexts/DataContext"

export const Slider = () => {
  const {imgSlider} = useDataContext();
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide img-fluid" data-bs-ride="carousel" style={{minHeight: "800px"}}>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={imgSlider && imgSlider[0].image} className="img-fluid" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgSlider && imgSlider[1].image} className="img-fluid" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={ imgSlider && imgSlider[2].image} className="img-fluid" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <h1 className="home--carousel-title font-monospace fw-bold home--h1-responsive">La forma inteligente <br /> de construir.</h1>
        </div>
  </div>
  )
}
