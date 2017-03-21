import { render } from 'preact';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';

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

// firebase.initializeApp(config);

render(
  <Router>
    <Store>
      {props => <App {...props} />}
    </Store>
  </Router>,
  document.getElementById('root')
);
