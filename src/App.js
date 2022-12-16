import "./App.css";
//Import route and our components
import { Route, Routes } from "react-router-dom";
import Stocks from "./pages/Stocks";
import About from "./pages/About";
import Price from "./pages/Price";
import Nav from "./components/Nav";
import Home from './pages/Home';

export default function App () {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Nav />
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/stocks" element={<Stocks/>}/>
      <Route path="/price/:symbol" element={<Price />} />
    </Routes>
    </div>
  );
}