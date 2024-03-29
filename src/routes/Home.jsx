import { Slider } from '../components/Slider'
import { Services } from '../components/Services'
import { WhoWeAre } from '../components/WhoWeAre'
import { CounterServices } from '../components/CounterServices'
import { Contact } from '../components/Contact'
import { Experiences } from '../components/Experiences'

export const Home = () => {
  return (
    <>
        <Slider />
        <Services />
        <WhoWeAre />
        <Experiences/>
        <CounterServices />
        <Contact />
    </>
  )
}
