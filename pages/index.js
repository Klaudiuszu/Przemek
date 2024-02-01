import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between xs:w p-24`}>
      <Navbar />
      <HeroSection />
      <div style={{height:'100vh'}}></div>
    </main>
  );
}
