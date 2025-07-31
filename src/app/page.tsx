import Header from "@/components/Header";
import About from "@/app/about/page";
import PortfolioPage from "@/app/portfolio/page";
import DemosPage from "@/app/demos/page";
import SkillsPage from "@/app/skills/page";
import ResumePage from "./resume/page";



export default function HomePage() {
  return (
    <>
      <Header />
      <About />
      <PortfolioPage />
      <SkillsPage />
      <ResumePage />
      <DemosPage />
    </>
  );
}
