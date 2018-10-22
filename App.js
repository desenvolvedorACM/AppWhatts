import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Routing from './src/Routes';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';


//COMPONENTE FUNCIONAL.
//STATELESS COMPONENT.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  //ANTES DE RENDERIZAR O COMPONENTE.
  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyDAqv8EpxLC3hiGfpbMbh6MougcqMJBeaU",
      authDomain: "whats-app-fake-1cf61.firebaseapp.com",
      databaseURL: "https://whats-app-fake-1cf61.firebaseio.com",
      projectId: "whats-app-fake-1cf61",
      storageBucket: "whats-app-fake-1cf61.appspot.com",
      messagingSenderId: "1076753399524"
    });
  }
  

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routing />
      </Provider>
    );
  }
}

export default App;
