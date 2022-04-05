import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Dashboard from './Components/Charts/Dashboard';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Reviews from './Components/Reviews/MainReviews/Reviews';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

      <Footer></Footer>
      
    </div>
  );
}

export default App;
