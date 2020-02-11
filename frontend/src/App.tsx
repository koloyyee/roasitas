import * as React from "react";
import "./css/App.css";
import Posts from "./components/Posts";
import { Provider } from "react-redux";
import store from "./store";
import Nav from "./components/Nav";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Story from "./components/Story";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact={true} component={Home}   />
            <Route path="/menu" exact={true} component={Menu}   />
            <Route path='/menu:dish' exact = {true} />
            <Route path="/news" exact={true} component={Posts} />
            <Route path="/news/:slug" exact={true} component={Story} />
            <Route path="/about" exact={true} component={About} />


          </Switch>
      </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
