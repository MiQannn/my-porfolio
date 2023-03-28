import "./App.css";

import { useEffect } from "react";
import Aos from "aos";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import Content from "./components/UI/Content";
import Services from "./components/UI/Services";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Content />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
