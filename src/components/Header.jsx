import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg'
import '../assets/css/header.css'
export const Header = (props) => {
  const {children} = props;
  return (
    <>
      <header>
        <div className="d-flex justify-content-end pt-3 bg-black container-fluid">
            <a className="px-3 mb-2 header__info" href="https://wa.me/2317538930" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-whatsapp px-2"></i><span className="d-sm-inline d-none">221-4503921</span> 
            </a>
            <a className="px-3 header__info" href="https://www.instagram.com/be.creativecloud/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram px-2"></i><span className="d-sm-inline d-none">CDC Construcciones</span>
            </a>
            <a className="px-3 header__info" href="https://www.google.com.ar/maps/@-34.9219017,-57.9488299,16z" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-location-dot px-2"></i><span className="d-sm-inline d-none">Donovan y Gral. Chamizzo</span> 
            </a>
        </div>
        <nav className="navbar navbar-expand-lg bg-light my-3">
          <div className="container-fluid">
            <Link className="navbar-brand header__logo" to="/">
              <img src={Logo} alt="logo CDC"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa-solid fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <ul className="navbar-nav fs-5">
                <li className="nav-item px-5">
                  <HashLink className="header__nav" smooth to="#services">SERVICIOS</HashLink>
                </li>
                <li className="nav-item px-5">
                  <HashLink className="header__nav" smooth to="#whoWeAre">QUIENES SOMOS</HashLink>
                </li>
                <li className="nav-item px-5">
                  <HashLink className="header__nav fw-bold" smooth to="#workWithUs">COTIZA TU OBRA</HashLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    {children}
    </>
  )
}

