import React,{useState} from 'react'
import MovieCard from "./MovieCard"



function MovieList(props) {
  
    const[changedID,setChangeId]=useState()
    console.log(changedID)
     
    const handleClick=(id)=>{
      setChangeId(id)
      
    }
      return( 
          <div className="Kard">
        {props.new 
          .filter(movie=>movie.id!==changedID)
          .filter(movie =>
            movie.rate >=(props.rat))
          .filter(movie => 
           movie.Title.toLowerCase().includes((props.search).toLowerCase()))
           .map((movie, id) => 
            <MovieCard key={props.new.id} movie={movie} id={id} handleClick={handleClick}/>
          )}
          
          </div>
      )
}
export default MovieList;

