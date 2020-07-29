import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './pages/home'
import Pagina404 from './pages/404'
import CadastroVideo from './pages/video'
import CadastroCategoria from './pages/categoria';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
    <Switch>
      <Route path="/categoria" component={CadastroCategoria} exact/>
      <Route path="/video" component={CadastroVideo} exact/>
      <Route path="/" component={Home} exact/>
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister(); 
