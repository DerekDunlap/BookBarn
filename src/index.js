import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './components/App';
import Baselayout from './components/Baselayout';
import AddBook from './components/AddBook';
import './components/Styles.css'
import reducer from './store/reducer'
import {createStore} from 'redux'
import { Provider } from 'react-redux';

const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Baselayout>
        <Switch>
          <Route exact path='/' component={App}></Route>
          <Route path='/add-book' component={AddBook}></Route>
        </Switch>
      </Baselayout>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
