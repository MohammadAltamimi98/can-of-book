import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class MyFavoriteBooks extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>

        {this.props.books.map((book, index) =>

          <div key={index}>

            <Card bg={'info'} style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>book title: {book.name}</Card.Title>
                <Card.Text>book description: {book.description}</Card.Text>
                <Card.Text>book status: {book.status}</Card.Text>
              </Card.Body>
              <Button onClick={() => this.props.deleteBook(index)}>Delete</Button>
              <Button onClick={() => this.props.showUpdateForm(index)}>Update Book</Button>

            </Card>
            <br />
          </div>


        )}

      </Jumbotron>
    )
  }
}

export default MyFavoriteBooks;



