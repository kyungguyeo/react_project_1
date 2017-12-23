import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class BooksApp extends React.Component {
  
  render() {
    return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {this.props.bookshelves.map((shelf, i) => (
                  <BookShelf key={i} handleChange={this.props.handleChange} books={this.props.books} shelfname={shelf}/>
                ))}
            </div>
            <div className="open-search">
              <Link to="/search" onClick={this.props.setSearchPage}>Search Books</Link>
            </div>
          </div>
        )}
}

export default BooksApp