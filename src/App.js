import React from 'react'
import GetBook from './GetBook'
import BooksApp from './BooksApp'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'

class App extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books.map((book) => {
        return {
          id: book.id,
          title: book.title,
          backgroundImage: `url("` + book.imageLinks['thumbnail'] + `")`,
          author: book.authors[0],
          shelf: book.shelf
          }
        }) 
      })
    })
  }

  handleChange = (value, book_id) => {

      this.setState((state) => ({
        books: state.books.map((book) => {
          if (book.id === book_id) {
            BooksAPI.update(book, value)
            book['shelf'] = value;
            return book;
          } else {
            return book;
          }
        })
      }))
    }

  addBook = (shelf, book_id) => {
    BooksAPI.get(book_id).then((book) => {
      this.setState((state) => ({
        books: state.books.concat({
          id: book.id,
          title: book.title,
          backgroundImage: `url("` + book.imageLinks['thumbnail'] + `")`,
          author: book.authors[0],
          shelf: shelf
          })
      }))
      alert('book: ' + book.title + ' added.')
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BooksApp
            handleChange={this.handleChange}
            bookshelves={['Currently Reading', 'Want to Read', 'Read']}
            books={this.state.books}
            />
            )}
        />
        <Route path="/search" render={() => (
          <GetBook
          handleChange={this.addBook}
          books={this.state.books}
          />  
          )}
        />
      </div>
     )
   }
}

export default App;