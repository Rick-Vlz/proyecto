import Layout from "../Layout/Layout"
import Products from "../components/Products"
import Hero from "../components/Hero"
import About from "../components/About"


const Home =  () => {
    return (
      <Layout>
        <Hero></Hero>
        <About></About>
        <section id="productos">
          <Products></Products>
        </section>
      </Layout>
    );
}

export default Home;