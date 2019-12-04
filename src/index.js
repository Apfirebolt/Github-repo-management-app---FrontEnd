import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import repoReducer from './store/reducers/repo';


const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
  repo: repoReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.register();
