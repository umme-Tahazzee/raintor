import Image from "next/image";
import Header from './../components/Header';
import About from "@/components/About";
import Hero from './../components/Hero';
import Work from './../components/Work';
import Contect from "@/components/Contect";
import Footer from './../components/Footer';

export default function Home() {
  return (
    <div>
        <Header/>
        <About/>
        <Hero/>
        <Work/>
        <Contect/>
        <Footer/>
    </div>
  );
}
