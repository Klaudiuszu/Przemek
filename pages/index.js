import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import WhyUsSection from "./components/whyUsSection";

export default function Home() {

  return (
    <>
      <Navbar />
      <main className='flex min-h-screen flex-col items-center justify-between xs:w xl:px-24'>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <WhyUsSection />
        <EmailSection />
      </main>
      <Footer />
    </>
  );
}
