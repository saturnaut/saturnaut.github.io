import React from 'react';
import ReactDOM from 'react-dom';
import App from 'sections/app/App';
import { Provider } from 'react-redux';
import configureStore from 'state/store';
import { BrowserRouter } from 'react-router-dom';
import 'index.scss';

const store = configureStore();

const render = Component => {
  return ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./sections/app/App', () => {
    const NextApp = require('./sections/app/App').default;
    render(NextApp);
  });
}
