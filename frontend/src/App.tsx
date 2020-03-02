import * as React from "react";
import "./App.css";
import Posts from "./components/news/Posts";
import { Provider } from "react-redux";
import store from "./store";
import Nav from "./components/nav/Nav";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Story from "./components/news/Story";
import Dnd from './components/mep/DnDTutorial';
// import HorizontalMenu from './components/mockAppStoreAPI/HorizontalMenu';





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
            <Route path="/mep" exact={true} component={Dnd} />
          </Switch>
      </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
