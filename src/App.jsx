
import NavBar from './components/NavBar.jsx'
import Contact from './sections/Contact.jsx'
import Experience from './sections/Experience.jsx'

import FeatureCards from './sections/FeatureCards.jsx'
import Footer from './sections/Footer.jsx'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import TechStack from './sections/TechStack.jsx'
const App = () => {
  return (
    <>
    <NavBar></NavBar>
     <Hero></Hero>
     <ShowcaseSection></ShowcaseSection>
     <FeatureCards
     ></FeatureCards>
    <Experience></Experience>
    <TechStack></TechStack>
    <Contact></Contact>
    <Footer></Footer>
    </>
    
  )
}

export default App