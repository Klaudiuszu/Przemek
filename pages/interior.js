import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import InteriorSection from "./components/interiorPage/InteriorSection";
import Consultation from "./components/architecturePage/Consultation";
import ProcesSection from "./components/architecturePage/ProcesSection";

export default function Interior() {

  return (
    <>
      <Navbar />
      <main className='flex min-h-screen flex-col items-center justify-between xs:w xl:px-24 my-12'>
        <Consultation />
        <InteriorSection />
        <ProcesSection />
      </main>
      <Footer />
    </>
  );
}
