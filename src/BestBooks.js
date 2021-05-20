import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';
import MyFavoriteBooks from './MyFavoriteBooks'
import BookUpdateForm from './BookUpdateForm';
import BookFormModal from './BookFormModal';
import { withAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';



class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      name: '',
      description: '',
      status: '',
      showTheUpdateForm: false,
      index: 0,
      showAddForm:false,
    }
  }



  // update functions
  updateBookName = (e) => this.setState({ name: e.target.value });
  updateBookDescription = (e) => this.setState({ description: e.target.value });
  updateBookStatus = (e) => this.setState({ status: e.target.value });

  // getting the books from the db  function

  componentDidMount() {
    this.getBooksData();
  }


  getBooksData = async () => {
    const { user } = this.props.auth0;
    try {
      const booksUrl = `http://localhost:3003/book?email=${user.email}`;
      console.log(user.email);
      const bookRequest = await axios.get(booksUrl);
      console.log(bookRequest.data);
      this.setState({
        books: bookRequest.data,
      })
    }
    catch (err) {
      console.log(err)
    }
  }



  // delete a book function 

  deleteBook = async (index) => {
    console.log(index);

    const newArrayOfBooks = this.state.books.filter((book, i) => {
      return i !== index;
    });
    console.log(newArrayOfBooks);
    this.setState({
      books: newArrayOfBooks
    });
    const { user } = this.props.auth0;
    const query = {
      email: user.email
    }
    console.log('app', query);
    await axios.delete(`http://localhost:3003/book/${index}`, { params: query })

  }


  // add a book
  addBook = async (e) => {

    // TODO: send the request to the backend 
    const { user } = this.props.auth0;
    const bodyData = {
      name: this.state.name,
      description: this.state.description,
      status: this.state.status,
      email: user.email
    }
    console.log(bodyData);
    const newBook = await axios.post(`http://localhost:3003/book`, bodyData);

    // TODO: get the new data and update it in the state
    this.setState({
      books: newBook.data
    })
  }


  // update a book 
  //  show the update form upon clicking :

  showUpdateForm = (idx) => {
    const ArrayOfBooks = this.state.books.filter((value, index) => {
      return index === idx
    });

    this.setState({
      index: idx,
      name: ArrayOfBooks[0].name,
      description: ArrayOfBooks[0].description,
      status: ArrayOfBooks[0].status,
      showTheUpdateForm: true,
    });
  }
  // function to update the data in the backend when clicking:
  updateBooks = async (e) => {

    e.preventDefault();
    const { user } = this.props.auth0
    const reqBody = {
      name: this.state.name,
      description: this.state.description,
      status: this.state.status,
      email: user.email
    }

    const updatedBooks = await axios.put(`http://localhost:3003/book/${this.state.index}`, reqBody);
    this.setState({
      books: updatedBooks.data,
    });
  }


  showAddFrom = ()=> this.setState({showAddForm : true});


















  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>


        <Button onClick={this.showAddFrom} variant="outline-primary">Add a Book</Button><br/><br/>
            {this.state.showAddForm &&
              <>
                 <BookFormModal
         updateBookName={this.updateBookName}
         updateBookDescription={this.updateBookDescription}
         updateBookStatus={this.updateBookStatus}
         addBook={this.addBook}
        />
                
                <br/><br/>
              </>
              }




       


        {this.state.showTheUpdateForm &&

        <BookUpdateForm
          name={this.state.name}
          description={this.state.description}
          status={this.state.status}
          updateBookName={this.updateBookName}
          updateBookDescription={this.updateBookDescription}
          updateBookStatus={this.updateBookStatus}
          updateBooks={this.updateBooks}
        /> }


        


        <MyFavoriteBooks
          deleteBook={this.deleteBook}
          showUpdateForm={this.showUpdateForm}
          books={this.state.books}
          updateBooks={this.updateBooks}
        />


      </Jumbotron>
    )
  }
}

export default withAuth0(BestBooks);