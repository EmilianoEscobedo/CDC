import {Routes, Route} from 'react-router-dom';
import { Home } from './routes/Home';
import { DetailServices } from './routes/DetailServices';
import { DetailExperiences } from './routes/DetailExperiences';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './assets/css/index.css'

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/services/:serviceId' element={<DetailServices />} />
        <Route exact path='/experiences/:experienceId' element={<DetailExperiences />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
