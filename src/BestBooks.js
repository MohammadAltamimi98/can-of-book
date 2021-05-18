import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
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
      const booksUrl = `http://localhost:8080/book?email=${user.email}`;
      console.log(user.email);
      const bookRequest = await axios.get(booksUrl);
      console.log(bookRequest);
      this.setState({
        booksData: bookRequest.data,
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
        {this.state.booksData.map((book, index) =>

          <div key={index}>
            
            <Card bg={'info'} style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>book title: {book.name}</Card.Title>
              <Card.Text>book description: {book.description}</Card.Text>
              <Card.Text>book status: {book.status}</Card.Text>
            </Card.Body>
            <Button onClick={(i) => this.props.deleteBook(i)}>Delete</Button>
            </Card>
      
            <br/>
          </div>


        )}
      </Jumbotron>
    )
  }
}

export default withAuth0(BestBooks);
