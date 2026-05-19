import VerticalSidebar from '../components/VerticalSidebar'
import HeroSection from '../sections/HeroSection'
import FeaturedProjectsSection from '../sections/FeaturedProjectsSection'
import ExpertiseSection from '../sections/ExpertiseSection'
import AboutSection from '../sections/AboutSection'
import AtLifeSection from '../sections/AtLifeSection'
import ContactCTASection from '../sections/ContactCTASection'

export default function IndexPage() {
  return (
    <>
      <VerticalSidebar text="DIGITAL TECHNOLOGY MANAGER" />
      <HeroSection />
      <FeaturedProjectsSection />
      <ExpertiseSection />
      <AboutSection />
      <AtLifeSection />
      <ContactCTASection />
    </>
  )
}
