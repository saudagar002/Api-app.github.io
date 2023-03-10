import './App.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Component/Home';
import About from './Component/About';
import Api from './Component/Api';

function App() {
  return (
    <>
   <Router>
<Navbar/>
<Routes>
<Route path='/Home' element={<Home />} />
<Route path='/About' element={<About />} />
<Route path='/Api' element={<Api />} />
</Routes>




   </Router>



    </>
    
  );
}

export default App;
