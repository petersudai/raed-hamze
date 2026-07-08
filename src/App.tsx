import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Profile from "./sections/Profile";
import CareerLedger from "./sections/CareerLedger";
import TwoHouses from "./sections/TwoHouses";
import Credentials from "./sections/Credentials";
import Awards from "./sections/Awards";
import Reach from "./sections/Reach";
import Testimonials from "./sections/Testimonials";
import Instructor from "./sections/Instructor";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Profile />
        <CareerLedger />
        <TwoHouses />
        <Credentials />
        <Awards />
        <Reach />
        <Testimonials />
        <Instructor />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
