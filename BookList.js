import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

class BookList extends Component {


    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Bookshelf
                        bookshelfTitle={'Currently Reading'}
                        bookshelfType={'currentlyReading'}
                        books={this.props.books}
                        onClick={this.props.onClick}
                    />
                    <Bookshelf
                        bookshelfTitle={'Want to read'}
                        bookshelfType={'wantToRead'}
                        books={this.props.books}
                        onClick={this.props.onClick}
                    />
                    <Bookshelf
                        bookshelfTitle={'Read'}
                        bookshelfType={'read'}
                        books={this.props.books}
                        onClick={this.props.onClick}
                    />
                </div>
                <div className="open-search">
                    <Link to="/add">
                        Add a book
                    </Link>
                </div>
            </div>
        )
    }
}

export default BookList;