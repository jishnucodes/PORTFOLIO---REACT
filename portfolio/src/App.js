import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Header from "./Components/Navbar/Header";
import Project from "./Components/Project/Project";



function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
