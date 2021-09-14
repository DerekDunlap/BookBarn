import * as actionTypes from './actionTypes'

export const savedBooks=(books)=>{
    return{
        type:actionTypes.BOOKS_UPLOADED,
        payload:books
    }
}

export const addBook=(book)=>{
    return {
        type:actionTypes.ADD_BOOK,
        payload:book
    }
}