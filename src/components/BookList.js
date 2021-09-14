import {connect} from 'react-redux'

function BookList(props){


    const handleDeleteBook=(e)=>{
        console.log(e.target.value)
    }


    const bookInfo=props.books.map((book)=>{
        return <li key={book.id}>
            <h4>{book.title}</h4>
            <label>{book.genre}</label>
            <label>{book.publisher}</label>
            <label>{book.year}</label>
            <img src={book.imageURL}/>
            <button onClick={handleDeleteBook} value={book.id}>Delete</button>
            </li>
    })

    return (
        <ul>
            {bookInfo}
        </ul>
    )
}

const mapStateToProps=(state)=>{
    return{
        books:state.books
    }
}

export default connect(mapStateToProps)(BookList)