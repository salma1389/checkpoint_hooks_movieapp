
// import { Domain, Route, Router } from '@mui/icons-material';
import { useState } from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import Search from './components/Search';
import { MoviesData } from './Data';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';



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
     <Router>
    
     <Search text={text} handelChange={handelChange} handelRate={handelRate} rate={rate}/>

    < Switch>
      <Route exact path='/'>
      <MovieList movies={list.filter(movie=>movie.name.toLowerCase().includes(text.toLowerCase())&&movie.rating>=rate)} del={handelDelete} edited={handelEdit}  />
      </Route>
      <Route exact path="/MovieDetails/:id" render={(props) => <MovieDetails  {...props} details={list}/> }/>
    </Switch>
      <AddMovie add={handelAdd}/>


      </Router> 
    </div>
  );
}

export default App;

