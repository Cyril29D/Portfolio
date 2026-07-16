import Contact from "./components/home/contact"
import EducationSkills from "./components/home/education-skills"
import ExperienceSec from "./components/home/experience-sec"
import HeroSection from "./components/home/hero-section"
import ContactBar from "./components/home/hero-section/contact-bar"
import LatestWork from "./components/home/latest-work"

const page = () => {
  return (
    <>
      <main className="portfolio-background">
        <HeroSection />
        <ContactBar />
        <EducationSkills />
        <LatestWork />
        <ExperienceSec />
        <Contact />
      </main>
    </>
  )
}

export default page
