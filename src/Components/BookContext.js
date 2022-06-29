import { createContext, useState, useReducer } from "react";

let initialBookState= {
    books:[{id:1, name:'Harry Potter and the Goblet of Fire', author:'J.K Rowling'},
    {id:2, name:'Steve Jobs', author:'Walter Isaacson'},
    {id:3, name:'War and Peace', author:'Leo Tolstoy'}
]
}

export const reducer=(state,action)=>{
    switch(action.type){
        case 'ADD_BOOK' :
            return {
                ...state,
                books:action.payload
            }
            case 'REMOVE_BOOK' :
            return {
                ...state,
                books:action.payload
            }
    }
}

export const  BookContext= createContext(initialBookState);

export const BookContextProvider = ({ children }) =>{
    //const [state, setState] =useState(initialBookState)
    const [state, dispatch] =useReducer(reducer,initialBookState)
    const addBooks =(objBook)=>{
        let id=state.books[state.books.length-1].id +1
        
        let newBooks=[...state.books, {id,...objBook}]
        /* setState({
            ...state,
            books:newBooks
        }) */
        dispatch({type:'ADD_BOOK',payload:newBooks})
        console.log('BookContext add state', state, BookContext)
    }
    const removeBooks =(id)=>{
          let newBooks= state.books.filter(item=>item.id!==id)
         /*  setState({
            ...state,
           books: newBooks
        }) */
        dispatch({type:'REMOVE_BOOK',payload:newBooks})
       console.log('BookContext removeBooks state', state, BookContext)
    }
    return(
    <BookContext.Provider
    value={{
        books:state.books,
        addBooks,
        removeBooks
    }}
    >
        {children}
    </BookContext.Provider>
    )
} 