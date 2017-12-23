import React from 'react'

class Book extends React.Component {
  state = { value: this.props.book_shelf }

  handleChange = (event) => {
    this.setState({value: event.target.value});
    this.props.handleChange(event.target.value, this.props.id);
  }

  render() {
    
    return (
      <div className="book">
      <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.backgroundImage }}></div>
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
      </div>
      <div className="book-title">{this.props.book_title}</div>
      <div className="book-authors">{this.props.author}</div>
      </div>
      )
  }
}

export default Book