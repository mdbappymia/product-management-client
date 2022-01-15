import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Dashboard from './Component/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;