import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Stack } from '@/components/Stack';
import { LogoAnimation } from '@/components/LogoAnimation';
import { Portfolio } from '../components/Portfolio';
import { KeyMetrics } from '@/components/KeyMetrics';
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
      <Stack />
      <WorkExperience />
      <Education />
      <LogoAnimation />
      <Portfolio /> 
      <KeyMetrics /> 
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
