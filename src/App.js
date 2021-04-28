import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import { Provider } from 'react-redux';
import { ConfigureStore } from './app/store';
import { BrowserRouter } from 'react-router-dom';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );  
  }
}

export default App;