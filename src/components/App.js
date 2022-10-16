import React from 'react';
import ProtectedRoute from './ProtectedRoute';
import Register from './Register/Register';
import Login from './Login/Login';
import MainPage from './MainPage/MainPage';
import { Route, Switch, Redirect} from 'react-router-dom';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
            {loggedIn ? <Redirect to="/main" /> : <Redirect to="/login" />}
        </Route>
        <ProtectedRoute
          path="/main"
          loggedIn={loggedIn}
          component={MainPage}
        />
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
