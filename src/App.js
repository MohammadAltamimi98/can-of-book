import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginButton from './LoginButton';
import Profile from './Profile';
import MyFavoriteBooks from './BestBooks';
import useAuth0  from "@auth0/auth0-react";


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
                {this.props.useAuth0.isAuthenticated ? <MyFavoriteBooks/> : <LoginButton/>}
               
                
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
