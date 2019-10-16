import React,{Component} from 'react';

import BookList from './BookList';
import './BookHot.css'

class BookHot extends Component{

	render(){
		const books = this.props.books
		return(
			<div class="hotSale">
				<h4 className="source">京东热销</h4>
				<hr/>
				<BookList  books={books}/>
			</div>
			)
	}
}

export default BookHot