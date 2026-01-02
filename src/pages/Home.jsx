import Hero from "../Containers/Hero";
import Features from "../Containers/Features";
import Brand from "../Containers/Brand";
import About from "../Containers/About";
import Reviews from "../Containers/Reviews";
import Contact from "../Containers/Contact";

const Home = () => {
  return (
    <div className=" overflow-x-hidden" id="home">
      {" "}
      <Hero />
      <Brand />
      <Features />
      <About />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Home;
