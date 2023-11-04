import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Switch, useNavigate, Routes } from "react-router-dom";
import About from "./components/about/About";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route exact path="/about" element= {<About />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
