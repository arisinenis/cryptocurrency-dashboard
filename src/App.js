import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Switch, useNavigate, Routes } from "react-router-dom";
import About from "./components/about/About";
import Nav from "./components/Nav/Nav";
import "./App.css"

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/about" element={<About />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;

// https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT
