
export const Header = () => {
  return (
    <header>
      <div className="d-flex justify-content-end pt-3 bg-black container-fluid">
          <a className="text-decoration-none px-3 text-white mb-2" href="https://wa.me/2317538930" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-whatsapp px-2"></i><span className="d-sm-inline d-none">221-4503921</span> 
          </a>
          <a className="text-decoration-none px-3 text-white" href="https://www.instagram.com/be.creativecloud/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram px-2"></i><span className="d-sm-inline d-none">CDC Construcciones</span>
          </a>
          <a className="text-decoration-none px-3 text-white" href="https://www.google.com.ar/maps/@-34.9219017,-57.9488299,16z" target="_blank" rel="noreferrer">
            <i className="fa-solid fa-location-dot px-2"></i><span className="d-sm-inline d-none">Donovan y Gral. Chamizzo</span> 
          </a>
        </div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="/assets/images/header/header-logo.svg" alt="" className="d-inline-block align-text-top header--img-responsive" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa-solid fa-caret-down"></i>
            </button>
            <div className="collapse navbar-collapse justify-content-end header--nav-responsive" id="navbarNavAltMarkup">
              <ul className="navbar-nav fs-5">
                <li className="nav-item px-5">
                  <a className="nav-link text-primary " href="#services">SERVICIOS
                  </a>
                </li>
                <li className="nav-item px-5">
                  <a className="nav-link text-primary " href="#whoWeAre">QUIENES SOMOS</a>
                </li>
                <li className="nav-item px-5">
                  <a className="nav-link text-primary fw-bold" href="#workWithUs">COTIZA TU OBRA</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </header>
  )
}

