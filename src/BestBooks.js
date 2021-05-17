import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import { withAuth0 } from '@auth0/auth0-react';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
    }
  }


  componentDidMount() {
    this.getBooksData();
  }

  getBooksData = async () => {
    const { user } = this.props.auth0;

    try {
      const booksUrl = `{process.env.REACT_APP_PORT}/Books?email=${user.email}`
      const bookRequest = await axios.get(booksUrl)
      this.setState({
        booksData: bookRequest.data[0].books
      })
    }
    catch (err) {
      console.log(err)
    }


  }

  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        {this.state.bookData.map((book, index) =>

          <>
            <Card.Body key={index}>
              <Card.Title>book title: {book.name}</Card.Title>
              <Card.Text>book description: {book.description}</Card.Text>
              <Card.Text>book status: {book.status}</Card.Text>
            </Card.Body>
          </>


        )}
      </Jumbotron>
    )
  }
}

export default withAuth0(BestBooks);
