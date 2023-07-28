import Brands from "../../components/Brands"
import About from "../../components/about"
import Banner from "../../components/banner"
import Focus from "../../components/focus"
import Footer from "../../components/footer"
import Header from "../../components/header"
import Programs from "../../components/programs"
import TeamMembers from "../../components/teamMembers"

const Homepage = () => {
  return (
    <section>
      <Header />
      <Brands />
      <About />
      <Focus />
      <Banner />
      <Programs />
      <TeamMembers />
      <Footer />
    </section>
  )
}

export default Homepage