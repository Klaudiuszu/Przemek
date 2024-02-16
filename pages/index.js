import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import WhyUsSection from "./components/whyUsSection";

export default function Home() {

  return (
    <main className='flex min-h-screen flex-col items-center justify-between xs:w xl:px-24'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <WhyUsSection />
    </main>
  );
}
