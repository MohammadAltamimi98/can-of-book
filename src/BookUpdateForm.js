import React, { Component } from 'react'


class BookUpdateForm extends Component {


    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.updateBooks(e)} >

                    <label>Book Name</label>
                    <input type='text' onChange={(e) => this.props.updateBookName(e)}  value={this.props.name}/>
                    <br />
                    <label>Book Description</label>
                    <input type='text' onChange={(e) => this.props.updateBookDescription(e)} value={this.props.description} />
                    <br />
                    <label>Book Status</label>
                    <input type='text' onChange={(e) => this.props.updateBookStatus(e)}  value={this.props.status}/>
                    <br />
                    <button type="submit">
                        Update
                    </button>

                </form>
            </div>
        )
    }
}

export default BookUpdateForm;


