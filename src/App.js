import './App.css';
import HomeContent from './components/HomeContent/HomeContent';
import Navbar from './components/Navbar/Navbar';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import NewsDetails from './components/NewsDetails/NewsDetails';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeContent></HomeContent>
          </Route>
          <Route path="/:newsTitle">
            <NewsDetails></NewsDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </>

  );
}

export default App;
