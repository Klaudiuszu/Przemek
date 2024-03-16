import AboutSection from "../../src/components/AboutSection";
import EmailSection from "../../src/components/EmailSection";
import Footer from "../../src/components/Footer";
import HeroSection from "../../src/components/HeroSection";
import Navbar from "../../src/components/Navbar";
import ProjectsSection from "../../src/components/ProjectsSection";
import { getTranslationsProps } from "next-translations";
import { namespaces } from '../../src/constants/namespaces';

export { getStaticPaths } from "next-translations";

export default function Home() {

  return (
    <>
      <Navbar />
      <main className='flex min-h-screen flex-col items-center justify-between xs:w xl:px-24'>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps = async ctx => {
  const translationsProps = await getTranslationsProps(ctx, [namespaces.common])
  return {
    props: {...translationsProps}
  }
};

