import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'

import App from './App'
import store from './redux/redux-store'
import * as serviceWorker from './serviceWorker';

// export const Rerender = () => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </HashRouter>,
    document.getElementById('root')
  );
// }
// Rerender()
// store.subscribe(() => Rerender()) // особенность Redux - subscribe принимает колбэк и вызывается автоматически при изменении state
