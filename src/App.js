import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home';

export default function App({ user }) {
  return (
    <div>
      <div>
        Some user info from Store:
        <pre>{JSON.stringify(user, '', '  ')}</pre>
      </div>

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
