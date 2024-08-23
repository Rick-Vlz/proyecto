import Layout from "../Layout/Layout"
import Products from "../components/Products"
import Hero from "../components/Hero"

const Home =  () => {
    return (
      <Layout>
        <Hero></Hero>
        <section id="productos">
          <Products></Products>
        </section>
      </Layout>
    );
}

export default Home;