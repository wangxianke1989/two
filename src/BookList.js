import React,{Component} from 'react'
import './BookList.css'

class BooksList extends Component{
	render(){
		return(
			<div className='bookList'>
			{this.props.books.map((book)=>(
				
					<div key={book.book_id} className='bookContainer'>
						<div className='bookFace'>
							<img src={book.book_cover} />
						</div>
						<div className='bookDetail'>
							<p className='bookName'>{book.book_name}</p>
							<p className='bookAuthor'>{book.book_author}</p>
							<p classNane='bookPrice'><strong>{book.book_price}</strong></p>
						</div>
					</div>
				))}
			</div>
			)
	}
}
export default BooksList