import { useState } from 'react'
import {connect} from 'react-redux'
import * as actionCreators from './actions/actionCreators'

function AddBook(props){
    const [book,setBook]=useState({})

    const handleOnChange=(e)=>{
        setBook({
            ...book,
            [e.target.name]:e.target.value
        })
    }

    const handleAddBook=()=>{
       fetch('http://localhost:8000/api/books',{
           method: 'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify({
               title:book.title,
               genre:book.genre,
               publisher:book.publisher,
               year:book.year,
               imageURL:book.imageURL
           })
       })
       .then(response=>{
           return response.json()
       }).then(results=>{
           if(results.success){
               props.handleAddBook(book)
               props.history.push('/')
           }
       })
    }

    return(
        <div id='addBookDiv'>
            <input type='text' name='title' onChange={handleOnChange} placeholder='Title'/>
            <input type='text' name='genre' onChange={handleOnChange} placeholder='Genre'/>
            <input type='text' name='publisher' onChange={handleOnChange} placeholder='Publisher'/>
            <input type='text' name='year' onChange={handleOnChange} placeholder='Year'/>
            <input type='text' name='imageURL' onChange={handleOnChange} placeholder='Cover Art'/>
            <button onClick = {handleAddBook}>Confirm</button>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        handleAddBook:(book)=>dispatch(actionCreators.addBook(book))
    }
}

export default connect(null,mapDispatchToProps)(AddBook)