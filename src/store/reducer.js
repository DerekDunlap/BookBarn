import * as actionTypes from '../components/actions/actionTypes'

const initialState={
    books:[]
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.BOOKS_UPLOADED:
            return{
                ...state,
                books:action.payload
        }
        case actionTypes.ADD_BOOK:
            return{
                ...state,
                books:[state.books,action.payload]
            }
        default:
            return state
    }
}

export default reducer