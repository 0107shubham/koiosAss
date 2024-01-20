import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Logo from "./component/Logo";
import WhyUs from "./component/WhyUs";
import Services from "./component/Services";
import Connection from "./component/Connection";

import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <p className="text-orange-400">shubha,</p>
      <Header />
      <Home />
      <Logo />
      <WhyUs />
      <Services />
      <Connection />
      <Footer />
    </div>
  );
}

export default App;
