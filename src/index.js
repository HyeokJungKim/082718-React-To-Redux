import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './redux/reducer'


const store = createStore(reducer)

// console.log(store);
// console.log("state is", store.getState());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
