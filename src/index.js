import React, { StrictMode } from 'react';
import ReactDOM, { render } from 'react-dom';

import App from 'App';
import * as serviceWorker from 'serviceWorker';

if (process.env.NODE_ENV !== 'production') {
  import('react-axe').then((axe) => axe.default(React, ReactDOM, 1000));
}

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
