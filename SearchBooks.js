import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBooks extends Component {
    state = {
        query: '',
    }

    updateQuery = (query) => {
        this.setState({
            query: query
        })
    }

    render() {
        const { shelvedBooks } = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <form>
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                onChange={(event) => { this.updateQuery(event.target.value) }}
                            />
                        </form>
                        <ol className="books-grid">
                            {shelvedBooks.filter((book) => (book.title === this.state.query)).map((book) =>
                                <li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                            <div className="book-shelf-changer">
                                                <select>
                                                    <option value="move" disabled>Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{book.author}</div>
                                    </div>
                                </li>
                            )}
                        </ol>

                    </div>
                </div>

            </div>
        )
    }
}

export default SearchBooks;