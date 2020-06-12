import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CountCtrolPanel from "./components/CountCtrolPanel";
import countStore from "./components/store";
import {Provider} from "mobx-react"
 

ReactDOM.render(
  <Provider store={countStore}>
    <CountCtrolPanel/>
  </Provider>,
  document.getElementById('root')
);
