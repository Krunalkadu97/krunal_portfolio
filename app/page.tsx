import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Stack } from '@/components/Stack';
import { LogoAnimation } from '@/components/LogoAnimation';
import { Portfolio } from '../components/Portfolio';
import { About } from '@/components/About';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';
import { WorkExperience } from '@/components/WorkExperience';
import { Education } from '@/components/Education';
import { Footer } from '@/components/Footer';
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <WorkExperience />
      <Education />
      <LogoAnimation />
      <Portfolio /> 
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
