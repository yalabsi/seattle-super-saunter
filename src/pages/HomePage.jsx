import Hero from '../components/Hero';
import Definition from '../components/Definition';
import Stats from '../components/Stats';
import Footer from '../components/Footer';
import AboutSections from '../components/AboutSections';
import SignUpForm from '../components/SignUpForm';

function HomePage() {
  return (
    <>
      <Hero />
      <Definition />
      <Stats />
      <AboutSections />
      <SignUpForm />
      <Footer />
    </>
  );
}

export default HomePage; 