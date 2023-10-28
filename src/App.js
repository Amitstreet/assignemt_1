import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Books from './components/books';
import Aurther from "./components/Aurther";
import Main_home from './components/Main_home';
import HOC from './components/hoc';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/"  exact>
         <Main_home/>
        </Route>
        <HOC path="/books">
          <Books />
        </HOC>
        <HOC path="/Aurther">
          <Aurther />
        </HOC>
      </div>
    </BrowserRouter>
  );
}
export default App;
