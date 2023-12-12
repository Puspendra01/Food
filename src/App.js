import { BrowserRouter, Route , Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Help from './components/Help';
import CartDetails from './components/Cart';
import ProductDetails from './components/FoodDetails';
function App() {
  return (
    <>  
    <BrowserRouter>
    <Navbar />
    <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/help' element={<Help />}/>
     <Route path='/cart' element={<CartDetails />}/>
     <Route path='/details' element={<ProductDetails />}/>
    </Routes>
    <Footer />
    </BrowserRouter>  
    </>    
  );
}
export default App;
