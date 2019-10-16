import React,{Component} from 'react';

import SearchBar from './SearchBar';
import Menu from './Menu';
import Slide from './Slide';
import BookHot from './BookHot';
import SearchResult from './SearchResult';
import Footer from './Footer';
import * as BookAPI from './utils/BookAPI';
import {Route} from 'react-router-dom';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      searchText:'',
      jdHotBooks:[],
      ddHotBooks:[],
      dkHotBooks:[],
      searchResult:[],
    };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.search = this.search.bind(this);

  }

  componentDidMount(){
    BookAPI.get_jd_hot().then((data)=>{
      this.setState({jdHotBooks:data.subjects})
    })
    BookAPI.get_dd_hot().then((data)=>{
      this.setState({ddHotBooks:data.subjects})
    })
    BookAPI.get_dk_hot().then((data)=>{
      this.setState({dkHotBooks:data.subjects})
    })
  }

  search(){
    let searchText = this.state.searchText

    if(searchText){
        BookAPI.search_jd(searchText)
        .then((data)=>{
          this.setState({searchResult:data.subjects})
        })
      }
  }

  handleSearchTextChange(searchText){
    this.setState({
      searchText:searchText
    });
  }


  render(){
    return (
      <div className="App">
        <SearchBar
              searchText = {this.state.searchText}
              onSearch = {this.search}
              SearchTextChange = {this.handleSearchTextChange}
        />

        <Menu/>
        <Slide/>

        <Route exact path='/'render={()=>(
          <div>
            <BookHot books = {this.state.jdHotBooks}/>
            <BookHot books = {this.state.ddHotBooks}/>
            <BookHot books = {this.state.dkHotBooks}/>
          </div>
        )}/>

        <Route path='/searchResult' render={()=>(
            <SearchResult searchResult = {this.state.searchResult}/>
        )}/>

        <Footer/>
      </div>
    );
  }
}

export default App;
