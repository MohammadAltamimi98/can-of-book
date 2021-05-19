import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import LoginButton from './LoginButton';
import Profile from './Profile';
import BestBooks from './BestBooks';
import BookFormModal from './BookFormModal';
import { withAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import axios from 'axios';




class App extends React.Component {
  ;
  constructor(props) {
    super(props);
    this.state = {
      bookName: '',
      bookDescription: '',
      bookStatus: '',
      books: []
    }
  }
  updateBookName = (e) => {
    this.setState({ bookName: e.target.value });
    console.log(this.state.bookName);
  }
  updateBookDescription = (e) => this.setState({ bookDescription: e.target.value });
  updateBookStatus = (e) => this.setState({ bookStatus: e.target.value });
  ///////////////////
  addBook = async (e) => {

    // TODO: send the request to the backend 
    const { user } = this.props.auth0;
    const bodyData = {
      name: this.state.bookName,
      description: this.state.bookDescription,
      status: this.state.bookStatus,
      email: user.email
    }
    console.log(bodyData);
    const newBook = await axios.post(`http://localhost:3003/book`, bodyData);

    // TODO: get the new data and update it in the state
    this.setState({
      books: newBook.data
    })
  }

  ///////////////////

  render() {
    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                {this.props.auth0.isAuthenticated ? <BestBooks deleteBook={this.deleteBook} /> : <Login />}
                {this.props.auth0.isAuthenticated ? <BookFormModal
                  updateBookName={this.updateBookName}
                  updateBookDescription={this.updateBookDescription}
                  updateBookStatus={this.updateBookStatus}
                  addBook={this.addBook} /> : ''}
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}

              <Route path="/profile">
                {this.props.auth0.isAuthenticated && <Profile />}

              </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
