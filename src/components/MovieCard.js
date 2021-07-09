import React from 'react'
import {Card,Button} from 'react-bootstrap/';
import "../App.css";
import ReactStars from "react-rating-stars-component"
import CloseIconPage from "./CloseIcon";




function  MovieCard( { movie:{Title,date, description,rate,posterURL,id},handleClick}){
  
 
  return (
    <div >
    <Card className="card" >
    <button onClick={()=>handleClick(id)}><CloseIconPage  /></button>
    
    <Card.Img  variant="top" src= {posterURL} style={{height:'430px',width: '320px',borderRadius:'25px'}}/>
  <Card.Body >
    <Card.Title style={{fontSize:"25px",textAlign:"center",color:"red"}}>{Title}</Card.Title>
    {date}<ReactStars 
    count={5}
    size={24}
    value={rate}
    edit={false}
    onChange={null}
    activeColor="#ffd700"
    
  />
        <Card.Text  style={{height:'188px',width: '244px'}} >
          {description}<button  style={{border:'none',backgroundColor:'transparent',color:'dodgerblue'}}>read more..</button>
    </Card.Text>
    <Button variant="primary">Watch Trailer</Button>
      </Card.Body>
</Card>
</div>
)
}

export default MovieCard;
