import React,{ useEffect} from 'react';
import BookList from './BookList';
import { connect } from "react-redux";
import * as actionCreators from './actions/actionCreators'

function App(props){
  useEffect(()=>{
    getAllBooks()
  },[])

  const getAllBooks=()=>{
    fetch(`http://localhost:8000/api/books`)
    .then(response=>{
      return response.json()
    }).then(books=>{
      props.onBooksLoaded(books)
    })
  }

  return(
    <div>
      <h1>{props.counter}</h1>
      <h3>All Books</h3>
      <BookList/>
    </div>
  )
}

const mapDispatchToProps=(dispatch)=>{
  return{
    onBooksLoaded:(books)=>dispatch(actionCreators.savedBooks(books))
  }
}

export default connect(null,mapDispatchToProps)(App);
