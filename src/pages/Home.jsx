import Navbar from '../components/Navbar'; 
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import Skills from '../components/Skills'; 

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <Skills /> 
    </main>
  );
};

export default Home;