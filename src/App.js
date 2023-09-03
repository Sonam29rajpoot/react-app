import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./components/Login/login";
import Registration from "./components/Registration/registration";
import Productlist from "./components/Category/category";
import store from './store';
import { Provider } from 'react-redux';
import MenTShirts from "./components/ProductIist/Men's-t-shirts";
import WomenTShirts from "./components/ProductIist/women's-t-shirt";
import Accessories from "./components/ProductIist/Accessories";
import Kids from "./components/ProductIist/Kid's-clothes";
import AddToCart from "./components/Add-to-cart/AddToCart";
import Navbar from "./components/Navbar/Navar";
function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <div className="App">
        <Navbar/>
        <Routes>
        <Route path="/reg" element={<Registration />}/>
        <Route path="/login" element={<Login />}/>
         <Route path="/product" element={<Productlist/>}/>
         <Route path="/MenTShirts" element={<MenTShirts/>}/>
         <Route path="/WomenTShirts" element={<WomenTShirts/>}/>
         <Route path="/Accessories" element={<Accessories/>}/>
         <Route path="/Kids" element={<Kids/>}/>
         <Route path="/AddToCart" element={<AddToCart/>}/>
        </Routes>
      </div>
    </Provider>
    </BrowserRouter>
 
  );
}
export default App;
