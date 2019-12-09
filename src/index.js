import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import App from 'App';
import * as serviceWorker from 'serviceWorker';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
