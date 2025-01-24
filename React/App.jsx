import './App.css'
import Banner from './Compoments/Banner'
import Movie_Card from './Compoments/Movie_Card'
Movie_Card
import Navbar from './Compoments/Navbar'



function App() {
  

  return (
    <>
      <Navbar/>
      <div className=' flex flex-wrap space-y-20'  >
      <Banner/>
      <Movie_Card/>
      <Movie_Card/>
      <Movie_Card/>
      <Movie_Card/>
      <Movie_Card/>
      <Movie_Card/>
      <Movie_Card/>
      <Movie_Card/>
      <Movie_Card/>
      <Movie_Card/>
      <Movie_Card/>
      <Movie_Card/>
      </div>

     
    </>
  )
}

export default App
