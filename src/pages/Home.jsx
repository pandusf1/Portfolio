import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import Skills from '../components/Skills';
import Journey from '../components/Journey';

const Home = () => {
  return (
    <main>
      <Hero />
      <Journey />         
      <FeaturedProjects /> 
      <Skills />
    </main>
  );
};

export default Home;