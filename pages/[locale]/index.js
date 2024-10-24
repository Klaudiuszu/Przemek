import AboutSection from "../../src/components/AboutSection";
import TextSection from "../../src/components/TextSection";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import ProjectsSection from "../../src/components/ProjectsSection";
import { getTranslationsProps } from "next-translations";
import { namespaces } from '../../src/constants/namespaces';
import CookiesConsent from "../../src/components/CookiesConsent";
import SliderLogo from "../../src/components/SliderLogo";
import Carousel from "../../src/components/Carousel";
import ConsultationEl from "../../src/components/architecturePage/Consultation";

export { getStaticPaths } from "next-translations";


export default function Home() {

  return (
    <>
      <Navbar />
      <Carousel />
      <main className='flex min-h-screen flex-col items-center justify-between xs:w xl:px-24'>
        <AboutSection />
        <TextSection />
        <ProjectsSection />
        <SliderLogo />
        <ConsultationEl />
      </main>
      <Footer />
      <CookiesConsent />
    </>
  );
}

export const getStaticProps = async ctx => {
  const translationsProps = await getTranslationsProps(ctx, [namespaces.common])
  return {
    props: { ...translationsProps }
  }
};

