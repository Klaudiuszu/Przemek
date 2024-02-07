import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {

  return (
    <main className='flex min-h-screen flex-col items-center justify-between xs:w px-24'>
      <Navbar />
      <HeroSection />
      <AboutSection />
    </main>
  );
}
