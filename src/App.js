import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Shop />}></Route>
       <Route path='/shop' element={<Shop />}></Route>
       <Route path='/orders' element={<Orders />}></Route>
       <Route path='/inventory' element={<Inventory />}></Route>
       <Route path='/about' element={<About />}></Route>
       <Route path='/login' element={<LogIn />}></Route>
       <Route path='/signup' element={<SignUp />}></Route>
     </Routes>
    </div>
  );
}

export default App;
