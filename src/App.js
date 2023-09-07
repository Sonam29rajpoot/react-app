import { BrowserRouter } from "react-router-dom";
import store from './store';
import { Provider } from 'react-redux';
import Navbar from "./components/Navbar/Navar";
import RoutePage from './route'



function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <RoutePage />
        </div>
      </Provider>
    </BrowserRouter>

  );
}
export default App;
