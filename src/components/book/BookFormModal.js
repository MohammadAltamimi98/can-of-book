import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';



class BookFormModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookName: '',
            bookDescription: '',
            bookStatus: ''
        }

    };




addBook= async (e)=> {
    e.preventDefault();
       const {  user } = this.props.auth0;
 
        const bodyData ={
        name:this.state.bookName,
        description:this.state.bookDescription,
        status:this.state.bookStatus,
        email:user.email
    }
    console.log(bodyData);

    const newBook = await axios.post(`http://localhost:3003/book`, bodyData);
    console.log(newBook);
    this.setState({
        books: newBook.data
      })


}

    render() {



        return (
            <div>
                <form onSubmit={(e) => this.addBook(e)} >

                    <label>Book Name</label>
                    <input type='text' onChange={(e) => this.setState({
                        bookName: e.target.value
                    })} />

                    <br />
                    <label>Book Description</label>
                    <input type='text' onChange={(e) => this.setState({
                        bookDescription: e.target.value})} />
                    <br />
                    <label>Book Status</label>
                    <input type='text' onChange={(e) => this.setState({
                        bookStatus: e.target.value})} />
                    <br />
                    <input type='submit' value="Add Book" />
                </form>
            </div>
        )
    }
}

// export default BookFormModal;
export default withAuth0(BookFormModal);
