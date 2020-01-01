import React from "react";
import logo from "../static/Roasita's-White-font.png";
import { Container } from "@material-ui/core";
import "../css/Home.css";

const Home: React.FC = () => {
  return (
    <div>
      <p className="title">
        Roasita's
        <br />
        <span id="small_title">A Quest For Roast Chicken </span>
      </p>
      <Container fixed={true}>
        <div className="front_pic">
          <img src={logo} className="roasitas_logo" alt="logo" />
        </div>
      </Container>
    </div>
  );
};

export default Home;
