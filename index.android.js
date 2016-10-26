import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import SplashScreen from 'react-native-smart-splash-screen'

import * as reducers from './reducers';
import ZooApp from './containers/zooApp';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  componentDidMount () {
       SplashScreen.close(SplashScreen.animationType.scale, 850, 500)
  }

  render() {
    return (
      <Provider store={store}>
        <ZooApp />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('zoobrno', () => App);
