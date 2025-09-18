import type { JSX } from "react";
import homeStyles from "./styles/home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

const Home = (): JSX.Element => {
  return (
    <div className={homeStyles.homeContainer}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
