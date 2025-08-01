import Header from "@/components/Header";
import AboutPage from "@/components/about";
import PortfolioPage from "@/components/portfolio";
import SkillsSection from "@/components/skills";
import ResumePage from "@/components/resume";
import DemosPage from "@/components/demos";

export default function Home() {
  return (
    <>
      <Header />
      <AboutPage />
      <PortfolioPage />
      <SkillsSection />
      <ResumePage />
      <DemosPage />
    </>
  );
}
