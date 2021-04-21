import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from '@apollo/client/react';
import { Auth0Provider } from '@auth0/auth0-react';

import apolloClient from './apolloConfig';
import App from './Components/App';
import { getEnvVar } from './env';

const domain = getEnvVar('REACT_APP_AUTH0_DOMAIN');
const clientId = getEnvVar('REACT_APP_AUTH0_CLIENT_ID');

ReactDOM.render(
  <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
