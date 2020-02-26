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
                        shelvedBooks={this.props.shelvedBooks}
                        shelf={this.props.currentShelf}
                        onReadClick={this.props.OnUpdateToReadClick}
                    />
                    <Bookshelf
                        bookshelfTitle={'Want to read'}
                        bookshelfType={'wantToRead'}
                        shelvedBooks={this.props.shelvedBooks}
                        shelf={this.props.currentShelf}
                        onReadClick={this.props.OnUpdateToReadClick}
                    />
                    <Bookshelf
                        bookshelfTitle={'Read'}
                        bookshelfType={'read'}
                        shelvedBooks={this.props.shelvedBooks}
                        shelf={this.props.currentShelf}
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