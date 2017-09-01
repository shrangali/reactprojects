import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import todoApp from './reducers/reducers'
import { render } from 'react-dom'

let store = createStore(todoApp)

let rootElement = document.getElementById('root')

render(

   <Provider store = {store}>
      <App />
   </Provider>,
	
   rootElement
)