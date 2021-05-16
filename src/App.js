import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBooks from './BestBooks'
import Login from 'Login'
import Profile from './Profile'

class App extends React.Component {

  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                <BestBooks/>
                <Login/>
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Route path="/profile">
                <Profile/>
                </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default App;
