import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './SearchBar.css'

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
	}
	handleSearchTextChange(e){
		this.props.SearchTextChange(e.target.value);
	}

	render(){
		return(

			<div className='searchBar'>
				<h1 className="title">银河搜索</h1>
				<div className='searchArea'>
					<input
						type="text"
						className="searchInput"
						placeholder ="输入书名或作者名"
						value= {this.props.searchText}
						onChange = {this.handleSearchTextChange}
					/>
					<Link className='SearchLink'
						to="/SearchResult"
						className = "searchResult"
						onClick = {this.props.onSearch}
					><button className='searchButton'>搜索</button>
					</Link>
					
				</div>
			</div>
		)
	}
}
export default SearchBar