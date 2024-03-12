import React,{useEffect,useState} from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { action,horror,originals, romance } from "./urls";
import Footer from "./Components/Footer/Footer";

function App() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <NavBar scrolled={scrolled}/>
      <Banner />
      <RowPost url={originals} title={"Popular on Netflix"} />
      <RowPost url={romance} title={"Romance"} />
      <RowPost url={action} title={"Action"} />
      <RowPost url={horror} title={"Horror"} />
      <Footer/>
    </div>
  );
}

export default App;
