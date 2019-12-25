import React from 'react';
import logo from "./static/Roasita's-Black-font.png";
import './css/App.css';
import Posts from './pages/Blog'
import { Provider } from 'react-redux';
import store from './store';




const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="roasitas_logo" alt="logo" />
          <p>
            Roasitas. 
            <br/>
            A Quest For Roast Chicken. 
          </p>
        </header>
        <Posts />
      </div>

    </Provider>
  );
}

export default App;
