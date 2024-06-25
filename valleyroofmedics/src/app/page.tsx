import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import CallToAction from '../components/CallToAction';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Map from '../components/Map';
import Meta from '../components/Meta';
import Metrics from '../components/Metrics';
import Navbar from '../components/Navbar';
import News from '../components/News';
import Pricing from '../components/Pricing';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div>
      <Meta />
      <Navbar />
      <Banner />
      <AboutUs />
      <Features />
      <CallToAction />
      <Gallery />
      <Team />
      <Pricing />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Map />
      <Metrics />
      <News />
      <Footer />
    </div>
  );
}
