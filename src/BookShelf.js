import React from 'react'
import Book from './Book'

class BookShelf extends React.Component {
  bookshelves_key = {
    'read': 'Read',
    'currentlyReading': 'Currently Reading',
    'wantToRead': 'Want to Read'
  }
  render() {
    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.shelfname}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
                {this.props.books.map((book) => (
                  <div key={book.id}>
                    {this.props.shelfname === this.bookshelves_key[book.shelf] ? (
                    <li key={book.id}>
                      <Book 
                        handleChange={this.props.handleChange}
                        id={book.id}
                        book_shelf={book.shelf}
                        book_title={book.title}
                        author={book.author}
                        backgroundImage={book.backgroundImage}
                      />
                    </li>
                    ): (<div/>)
                    }
                  </div>
                ))}
            </ol>
          </div>
        </div>
        )
      }
}

export default BookShelf