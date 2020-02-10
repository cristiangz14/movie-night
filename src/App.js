import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import MoviesListPage from './containers/ListPage'
import MovieDetailsPage from './containers/DetailsPage/DetailsPage'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route path="/">
            <MoviesListPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
