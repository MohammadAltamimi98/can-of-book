import React, { Component } from 'react'


class BookFormModal extends Component {


    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.addBook(e)} >

                    <label>Book Name</label>
                    <input type='text' onChange={(e) => this.props.updateBookName(e)} />
                    <br />
                    <label>Book Description</label>
                    <input type='text' onChange={(e) => this.props.updateBookDescription(e)} />
                    <br />
                    <label>Book Status</label>
                    <input type='text' onChange={(e) => this.props.updateBookStatus(e)} />
                    <br />
                    <button type="submit">
                        ADD
                    </button>

                </form>
            </div>
        )
    }
}

export default BookFormModal;
