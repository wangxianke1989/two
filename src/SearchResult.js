import React,{Component} from 'react'
import BookList from './BookList'
import * as BookAPI from './utils/BookAPI'

class SearchResult extends Component{
	constructor(props){
		super(props)

	}

	render(){
		return(
			<BookList books ={this.props.searchResult}/>
		)
	}
}
export default SearchResult