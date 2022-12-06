import React from "react";
import { useTranslation } from "react-i18next";

import "../css/main.css";
import "../css/reset.css";
import "../css/top-menu.css";

import Header from "./Header";
import MainLogo from "./overview/MainLogo";
import Overview from "./overview/Overview";
import Spectator from "./registration/Spectator";
import Board from "./board/Board";
import Direction from "./direction/Direction";
import Contact from "./overview/Contact";
import Footer from "./Footer";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0,
    };
    this.scrollHandler = this.scrollHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
  }

  scrollHandler = () => {
    this.setState({ scrollY: window.pageYOffset });
    // console.log(this.state.scrollY);
  };

  render() {
    return (
      <div>
        <Header scrollY={this.state.scrollY} />
        <MainLogo />
        <Overview />
        <Spectator />
        <Board />
        <Direction />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Main;
