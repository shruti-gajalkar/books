import { useContext } from "react"
import { BookContext } from "./BookContext"


export const BookList=()=>{

    const {books, removeBooks} = useContext(BookContext)
    const removeBookToContext=(id)=>{
        removeBooks(id)
    }
    return(
        <div className="mainList">
            <h1>List of Books</h1>
            {(books && books.length>0 ) ? ( books.map(item=>
                    <div className="list" key={item.id}>
                    <div>{item.name}</div>
                    <div>{item.author}</div>
                    <input type="button" onClick={() => removeBookToContext(item.id)} value='Delete' />
                    </div>
                    )) :null}
            
        </div>
    
    )
}