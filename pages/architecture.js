import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ArchitectureSection from "./components/architecturePage/ArchitectureSection";
import Consultation from "./components/architecturePage/Consultation";
import ProcesSection from "./components/architecturePage/ProcesSection";

export default function Architecture() {

  return (
    <>
      <Navbar />
      <main className='flex min-h-screen flex-col items-center justify-between xs:w xl:px-24 my-12'>
        <Consultation />
        <ArchitectureSection />
        <ProcesSection />
      </main>
      <Footer />
    </>
  );
}
