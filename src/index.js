import { render } from 'preact';
import { BrowserRouter as Router } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
// import { initializeApp } from 'firebase';

import Store from './Store';
import App from './App';

// import './index.css';

const config = {
  // apiKey: '',
  // authDomain: '',
  // databaseURL: '',
  // storageBucket: '',
  // messagingSenderId: '',
};

initializeApp(config);

render(
  <Router>
    <Store>
      {props => <App {...props} />}
    </Store>
  </Router>,
  document.getElementById('root')
);
