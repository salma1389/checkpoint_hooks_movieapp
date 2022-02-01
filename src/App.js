
import { useState } from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import Search from './components/Search';
import { MoviesData } from './Data';

function App() {
  const [list, setList] = useState(MoviesData);
  const [text, setText] = useState("");
  const [rate, setRate] = useState(1);
  // console.log(list);

  //Delete Movie
  const handelDelete=(id)=>{
 setList(list.filter(el=>el.id !== id))
  }

  //Add a newmovie
const handelAdd=(newMovie)=>{
  setList([...list,newMovie])
}
//change the text
const handelChange=(change)=>{
  setText(change)
}

//change the rate
const handelRate=(rate)=>{
  setRate(rate)
}

//change the edited input
const handelEdit=(task)=>{
  setList(list.map(el=> el.id===task.id?{...el,...task} : el))
   }

  return (
    <div className="App">
    
     <Search text={text} handelChange={handelChange} handelRate={handelRate} rate={rate}/>
      <MovieList movies={list.filter(movie=>movie.name.toLowerCase().includes(text.toLowerCase())&&movie.rating>=rate)} del={handelDelete} edited={handelEdit}  />
      <AddMovie add={handelAdd}/>
    </div>
  );
}

export default App;

