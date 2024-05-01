import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Header from "./components/header";
import Navbar from "./components/navbar";


function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Header/>
        <Skills/>
        <Portfolio/>
        <Experience/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
