import { BrowserRouter, Route , Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Help from './components/Help';
function App() {
  return (
    <>
     <Navbar />
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/help' element={<Help />}/>
    </Routes>
    </BrowserRouter>
    <Footer /> 
    </>    
  );
}

export default App;
