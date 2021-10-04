import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Service from "./Components/Service/Service";
import Contact from "./Components/Contact/Contact";
import Notfound from "./Components/Notfound/Notfound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="*">
            <Notfound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
