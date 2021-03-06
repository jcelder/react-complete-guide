import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './components/App/App.jsx';
import reducer from './store/reducer'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer)

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
