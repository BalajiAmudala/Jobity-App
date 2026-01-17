import React from "react";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";

import { Link } from "react-router-dom";
import { Logo } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            I'm baby try-hard kogi vexillologist, skateboard taxidermy squid
            blackbird spyplane. Banh mi chia taiyaki poutine trust fund, etsy
            pork belly +1 mustache neutra vaporware you probably haven't heard
            of them. Ugh cupping DIY vice austin cornhole salvia blue bottle
            hammock. Bicycle rights neutra tattooed church-key microdosing.
            Asymmetrical ascot vibecession crucifix sus mukbang. Tacos
            cold-pressed ugh put a bird on it, letterpress fixie adaptogen
            vexillologist. Enamel pin church-key kickstarter meditation la
            croix.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
