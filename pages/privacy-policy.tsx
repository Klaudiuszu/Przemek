import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import PrivacyPolicyContent from "../src/components/PrivacyPolicy/PrivacyPolicyContent";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="flex justify-center w-full bg-background py-8">
        <div className="max-w-4xl w-full px-4">
          <PrivacyPolicyContent />
        </div>
      </main>
      <Footer />
    </>
  );
}