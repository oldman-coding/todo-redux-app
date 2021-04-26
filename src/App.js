import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import { Provider } from 'react-redux';
import { ConfigureStore } from './app/store';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
          <div className="App">
            <Main />
          </div>
      </Provider>
    );  
  }
}

export default App;