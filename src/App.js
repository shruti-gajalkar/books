import logo from './logo.svg';
import './App.css';
import { BookStore } from './Components/BookStore';
import { BookContext, BookContextProvider } from './Components/BookContext';
import { BookList } from './Components/BookList';

function App() {
  return (
    <BookContextProvider>
    <div className="App">
      <BookStore/>
      <BookList/>
    </div>
    </BookContextProvider>
  );
}

export default App;
