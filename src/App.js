import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Charts/Dashboard';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Reviewss from './Components/Reviews/Reviewss';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/reviews' element={<Reviewss />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

      <Footer></Footer>
      
    </div>
  );
}

export default App;
