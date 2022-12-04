import {Routes, Route} from "react-router-dom";
import { Home } from "./routes/Home";
import { Detail } from "./routes/Detail";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import './assets/css/index.css'

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/services/:serviceId" element={<Detail />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
