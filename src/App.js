import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import BestBooks from './BestBooks';
import LoginButton from './LoginButton';
import Profile from './Profile';
// import { withAuth0 } from '@auth0/auth0-react';
// import axios from 'axios';
import MyFavoriteBooks from './BestBooks';

class App extends React.Component {;

  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
               <LoginButton/>
                
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
