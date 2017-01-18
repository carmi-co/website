import { render } from 'react-dom';
import Routes from './scripts/routes';
import React from 'react';
import {
  AppContainer
} from 'react-hot-loader';

render( <AppContainer>
            <Routes />
          </AppContainer>, document.getElementById('app'))

if (module.hot) {
  module.hot.accept('./scripts/routes', () => {
    const NextApp = require('./scripts/routes').default;
    ReactDOM.render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootElement
    );
  });
}
