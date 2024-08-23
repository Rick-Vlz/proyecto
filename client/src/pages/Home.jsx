import Layout from "../Layout/Layout"
import Products from "../components/Products"
import Hero from "../components/Hero"

const Home =  () => {
    return (
      <Layout>
        <Hero></Hero>
        <Products></Products>
      </Layout>
    );
}

export default Home;