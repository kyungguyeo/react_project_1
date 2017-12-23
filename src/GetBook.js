import React from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { Link } from 'react-router-dom'

class GetBook extends React.Component {
  state = {
    query: '',
    search_results: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    if (query==="") {
      this.setState({search_results: []})
    } else {
        BooksAPI.search(query).then(books => {
          if (books.error==="empty query") {
            this.setState({search_results: []})
          } else {
            this.setState({search_results: books});
          }
      })
    }
  }

  render() {
    return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                  value={this.state.query}
                  onChange={(event) => this.updateQuery(event.target.value)}
                  type="text"
                  placeholder="Search by title or author"
                />
              </div>
            </div>
            <div className="search-books-results">
              {this.state.search_results.map((book) => (
                <ol key={book.id} className="books-grid">
                  {console.log(this.props.books.findIndex((mybook) => (mybook.id === book.id)) !== -1 ? this.props.books[this.props.books.findIndex((mybook) => (mybook.id === book.id))].shelf : 'none')}
                  <Book 
                    handleChange={this.props.handleChange}
                    book_shelf={this.props.books.findIndex((mybook) => (mybook.id === book.id)) !== -1 ? this.props.books[this.props.books.findIndex((mybook) => (mybook.id === book.id))].shelf : 'none'}
                    id={book.id}
                    book_title={book.title}
                    author={book.authors ? book.authors[0] : ""}
                    backgroundImage={book.imageLinks ? `url("` + book.imageLinks['thumbnail'] + `")` : ""}
                  />
                </ol>
                  )
              )}
            </div>
          </div>
        )
    }
}

export default GetBook