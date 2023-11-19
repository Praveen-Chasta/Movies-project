import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import LoginRoute from './components/LoginRoute'
import Popular from './components/Popular'
import SearchPage from './components/SearchPage'
import MovieDetails from './components/MovieDetails'
import AccountPage from './components/AccountPage'
import NotFoundPage from './components/NotFoundPage'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <div className="main-container">
    <Switch>
      <Route path="/login" exact component={LoginRoute} />
      <ProtectedRoute path="/" exact component={Home} />
      <ProtectedRoute path="/popular" exact component={Popular} />
      <ProtectedRoute path="/search" exact component={SearchPage} />
      <ProtectedRoute path="/account" exact component={AccountPage} />
      <ProtectedRoute path="/movies/:id" exact component={MovieDetails} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
)

export default App
