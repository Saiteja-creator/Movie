import {Route, Switch} from 'react-router-dom'
import './App.css'

import ProtectedRoute from './ProtectedRoute/app'
import Home from './components/Home/app'
import LoginForm from './components/LoginForm/app'

import HomePage from './components/HomePage/app'
// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/Home" component={Home} />
    <Route exact path="/sign-up" component={Home} />
    <Route exact path="/login" component={LoginForm} />

    <ProtectedRoute exact path="/" component={HomePage} />
  </Switch>
)

export default App
