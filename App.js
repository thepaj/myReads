import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css';
import { Route } from 'react-router-dom';
import BookList from './components/BookList';
import SearchBooks from './components/SearchBooks';

class App extends React.Component {
  state = {
    books: [],
    query: '',
    currentShelf: 'wantToRead'
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          books: books
        })
        console.log(this.state.books);
      })
  }

  // updateToRead = (book, shelf) => {
  //   BooksAPI.update(book, shelf)
  //     .then((shelf) => {
  //       this.setState({
  //         currentShelf: shelf
  //       })
  //       console.log('clicked');
  //     })
  // }

  // updateToWantToRead = (book, shelf) => {
  //   BooksAPI.update(book, shelf)
  //     .then(() => {
  //       this.setState({
  //         shelf: shelf
  //       })
  //     })
  // }

  // updateToCurrentlyReading = (book, shelf) => {
  //   BooksAPI.update(book, shelf)
  //     .then(() => {
  //       this.setState({
  //         shelf: shelf
  //       })
  //     })
  // }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <BookList
            OnUpdateToReadClick={(book, shelf) => this.updateToRead(book, shelf)}
            shelvedBooks={this.state.books}
            currentShelf={this.state.currentShelf}
          />
        )} />
        <Route path="/add" render={() => (
          <SearchBooks

            shelvedBooks={this.state.books}

          />
        )} />
      </div>
    )
  }
}

export default App;
