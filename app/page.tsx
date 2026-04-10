import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import DealFlowInfrastructure from "@/components/DealFlowInfrastructure";
import HowItWorks from "@/components/HowItWorks";
import NetworkModel from "@/components/NetworkModel";
import DealFlowProblem from "@/components/DealFlowProblem";
import Comparison from "@/components/Comparison";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar variant="overlay" />
        <Hero />
      </div>
      <main className="overflow-x-hidden">
        <Trust />
        <DealFlowInfrastructure />
        <HowItWorks />
        <NetworkModel />
        <DealFlowProblem />
        <Comparison />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
