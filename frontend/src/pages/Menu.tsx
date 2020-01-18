import React from "react";
import classBird from "../static/cutout_classic.png";
import hotBird from "../static/spicy-chicken-cutout.png";
import pickleCucumber from "../static/topRed-Cucumber.png";
import beet from "../static/topRed-Beet.png";
import potato from "../static/cutout_nori_potato.png";
import cabbage from "../static/shreddedCabbage.png";
import redOnion from "../static/redOnion.png";

import "../css/Menu.css";
import { Grid, Container } from "@material-ui/core";

const Menu: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <div className={"menu_page"}>
        <div className="mains">
          <h1> Birds </h1>
          <Grid container 
          alignItems="center"
          justify="center" 
          spacing={3}>
            <Grid item xs={4}>
              <img src={classBird} alt={"Classic Bird"} />
              <p>Classic Bird</p>
            </Grid>
            <Grid item xs={4}>
              <img src={hotBird} alt={"Hot Bird"} />
              <p>Hot Bird</p>
            </Grid>
          </Grid>
        </div>
        <div className="sides">
          <h1>Sides</h1>
          <Grid 
          alignItems="center"
          justify="center" 
          container >
            <Grid item xs={5} spacing={2}>
              <img src={pickleCucumber} alt={"Pickled Cucumber"} />
              <p>Cucumber</p>
            </Grid>
            <Grid item xs={5} spacing={2}>
              <img src={beet} alt={"Beetroot"} />
              <p>Beetroot</p>
            </Grid>
            <Grid item xs={4} spacing={3}>
              <img src={potato} alt={"Nori Roasted Potato"} />
              <p>Nori Roasted Potato</p>
            </Grid>
            <Grid item xs={4} spacing={3}>
              <img src={cabbage} alt={"Shredded Cabbage"} />
              <p>Shredded Cabbage</p>
            </Grid>
            <Grid item xs={4} spacing={3}>
              <img src={redOnion} alt={"Shaved Onion"} />
              <p>Shaved Onion</p>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default Menu;
