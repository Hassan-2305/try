import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileActionBar from "@/components/MobileActionBar";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Story />
        <Services />
        <Gallery />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
