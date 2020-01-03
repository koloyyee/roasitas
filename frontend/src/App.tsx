import React from "react";
import "./css/App.css";
import Posts from "./components/Posts";
import { Provider } from "react-redux";
import store from "./store";
// import Subscribe from './pages/Subscribe'
import Nav from "./components/Nav";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Construction from "./pages/Construction";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="App">
          <Nav />
          <Construction />
          {/* <Switch>
            <Route path="/" exact={true} component={Home}   />
            <Route path="/menu" exact={true} component={Menu}   />
            <Route path="/news" exact={true} component={Posts} />
            <Route path="/about" exact={true} component={About} />
          </Switch> */}
      </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
