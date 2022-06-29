import { useContext, useState } from "react"
import {BookContext} from './BookContext'
import { BookList } from './BookList';
export const BookStore = ()=> {

    const [state, setState] = useState({})
    const {books, addBooks} = useContext(BookContext)

    const addTitle = (e)=>{
        setState({
            ...state,
            title: e.target.value
        })
    }

    const addAuthor = (e)=>{
        setState({
            ...state,
            author: e.target.value
        })
    }

    const addBookToContext=()=>{
        addBooks({
            title:state.title,
            author: state.author
        })
    }

    return(
        <div>
        <h1>
            Book Store
        </h1>
        <div>
        <label>Title</label>
        <input type="text" onChange={(e)=>addTitle(e)}/>
        </div>
        <div>
        <label>Author</label>
        <input type="text" onChange={(e)=>addAuthor(e)}/>
        </div>
        <div>
        <input type="button" onClick={()=>addBookToContext()} value='Add Book'/>
        </div>
        
        </div>
    )

}

//const {photos, fetchPhotos} = useContext(PhotosContext)
{/* <ul id="photos-list">
   
   {
     photos && photos.length > 0 && photos.map(function(item, i){
 return (
   <li> 
       <h3>{item.title}</h3>
       <img src={item.imgSrc} />
       </li>
       )
})}
   </ul>
   <button onClick={()=>handlefetch()}>Fetch Photos </button> */}

   /* function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arrowList =S.split('')
    console.log('arrowList',arrowList)
    let obj=arrowList.reduce((acc,cv)=>{
        console.log('cv',cv)
        acc[cv] = (acc[cv] +1) || 1
        return acc
    },{})
    console.log('obj',obj)
    let count=0;
    for(let key in obj){
        console.log('obj[keys] key ',key,obj[key])
        if(obj[key] > count){
            count=obj[key]
        }
        //return count;
    }
    console.log('count',count)
    let num=arrowList.length-count
    return num
} */

/* function solution(A, P, B, E) {
    let range1=[]
    for(let i=0; i<P.length;i++){
        console.log('P[i]',P[i])
        let sub = P[i] - A[i]
        let pos = P[i]
        let add =P[i] + A[i]
        let crane= {sub,pos,add}
        //console.log('range1',range1)
        range1.push(crane)
        
    }
    console.log('range1',range1)
}

let result =solution([2,1],[5,1],2,6)
console.log('result',result) */