import Footer from './components/footer.jsx'
import NavBar from './components/navbar.jsx'
import Card from './components/Card.jsx'
import './App.css'
import movie1 from './assets/Chhava.jpg'
import movie2 from  './assets/12thfail.jpg'
import movie3 from './assets/oppenheimer.jpg'
import movie4 from './assets/ninnukori.jpg'

export default function App()
{
  return(
    <>
    
    <NavBar/>
    <div className='Cards'>
    <Card title={'Chhava'} description={'Chhava is a True Story based on Chhatrapati Sambhaji Maharaj'} movie={movie1}/>
    <Card title={'12th Fail'} description={'12th fail is about how a boy who failed in 12th can become an IAS officer'} movie={movie2}/>
    <Card title={'Oppenheimer'} description={'Oppenheimer is about the person who created Atom Bomb'} movie={movie3}/>
    <Card title={'NinnuKori'} description={'NinnuKori Suggests that breakup is not the end who always have second chance'} movie={movie4}/>
    </div>
    <Footer/>

    </>
  )
}