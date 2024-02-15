import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import './App.css'
import Navbar from "./components/header/Navbar";
import Home from "./pages/1.home/Home";
import Services from './pages/2.services/Services';
import Service1 from './pages/2.services/Service1';
import Service2 from './pages/2.services/Service2';
import Service3 from './pages/2.services/Service3';
import Service4 from './pages/2.services/Service4';
import Service5 from './pages/2.services/Service5';
import Service6 from './pages/2.services/Service6';
import Contact from './pages/4.contact/Contact';
import Footer from './components/footer/Footer';
import Training from './pages/5.Training/Training';
import CourseCatalog from './pages/5.Training/CourseCatalog';
import Register from './pages/5.Training/Register';
import About from './pages/6.About/About';
import Login from './pages/7.Login/Login';
import Cart from './pages/9.Cart/Cart';


function App() {

  return (
    <div>
      <Router>
          <Navbar />
          <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/service1' element={<Service1 />} />
          <Route path='/services/service2' element={<Service2 />} />
          <Route path='/services/service3' element={<Service3 />} />
          <Route path='/services/service4' element={<Service4 />} />
          <Route path='/services/service5' element={<Service5 />} />
          <Route path='/services/service6' element={<Service6 />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/training' element={<Training />} />
          <Route path='/training/coursecatalog' element={<CourseCatalog />} />
          <Route path='/training/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          
          </Routes>

          <Footer/>


      </Router>
    </div>
  )
}

export default App