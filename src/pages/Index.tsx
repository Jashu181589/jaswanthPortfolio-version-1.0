
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import SocialMedia from '../components/SocialMedia';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Skills from '../components/Skills';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navigation />
      <Hero />
      <SocialMedia />
      <Projects />
      <Experience />
      <Certifications />
      <Skills />
      <Blog />
      <Contact />
    </div>
  );
};

export default Index;
