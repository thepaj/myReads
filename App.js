import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css';
import { Route } from 'react-router-dom';
import BookList from './components/BookList';
import SearchBooks from './components/SearchBooks';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchedBooks: [],
      query: '',
    }
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

  onInputChange = (event) => {
    this.setState({
      query: event.target.value
    })
    console.log(this.state.query);
  }

  onBookSearch = () => {
    if (this.state.query === '') {
      this.setState({
        searchedBooks: []
      })
      console.log(`searched books : ${this.state.searchedBooks}`);
    } else if (this.state.query !== '') {
      BooksAPI.search(this.state.query)
        .then(results => {
          const mappedOverBooks = results
            .map(result => {
              this.state.books.forEach(book => {
                if (result.id === book.id) {
                  result.shelf = book.shelf;
                }
              })
              return result
            })

          this.setState({ searchedBooks: mappedOverBooks });
          console.log(this.state.searchedBooks);
        })
        .catch(() => {
          this.setState({
            searchedBooks: []
          })
        })
    }
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <BookList
            onClick={this.handleChangeShelf}
            books={this.state.books}
          />
        )} />
        <Route path="/add" render={() => (
          <SearchBooks
            onChange={(event) => { this.onInputChange(event); this.onBookSearch() }}
            query={this.state.query}
            books={this.state.searchedBooks}
          />
        )} />
      </div>
    )
  }
}

export default App;
