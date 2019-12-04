import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import repoReducer from './store/reducers/repo';


const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
  repo: repoReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.register();
