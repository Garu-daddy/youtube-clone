import type { NextPage } from "next";
import Header from "../components/core/Header";
import Seo from "../components/Seo";

const Home: NextPage = () => {
  return (
    <div>
      <Seo title="Home" />
      <Header />
    </div>
  );
};

export default Home;
