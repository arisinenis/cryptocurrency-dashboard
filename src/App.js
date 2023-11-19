import Header from "./features/header/Header";
import Footer from "./features/footer/Footer";
import { Route, Switch, useNavigate, Routes } from "react-router-dom";
import About from "./features/about/About";
import Nav from "./features/Nav/Nav";
import Home from "./features/Home";
import CryptoDetail from "./features/cryptoDetail/CryptoDetail";
import "./App.css";

function App() {
  return (
    <div className="mainPage">
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cryptoDetail" element={<CryptoDetail />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;

// https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT
