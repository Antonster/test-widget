import { Global } from '@emotion/react';
import { store } from '@store/store';
import { reset } from '@styles';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <Global styles={reset} />
      <App />
    </Router>
  </Provider>,
);
