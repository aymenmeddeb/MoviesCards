import './App.css';
import {Navbar,Nav,Form,Button,FormControl} from 'react-bootstrap';
import React ,{useState} from 'react'
import MovieList from "./components/MovieList"
import Modal from 'react-modal'
import img1 from './components/img1.jpg';
import img2 from './components/img2.jpeg';
import ReactStars from "react-rating-stars-component"


function App() {
  
  const customStyles = {
    content: {
      width:'550px',
      height:'950',
      textAlign:'center',
      borderRadius: '25px',
      backgroundColor :'steelblue',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  let subtitle;
  const [List,setList]=useState(
    [{id:1,
    Title:"Man On Fire",
    date:"2009",
    rate:3,
    description:<p> John Creasy, ancien agent spécial de la CIA (rayon assassin professionnel), alcoolique, se fait engager par une riche famille de Mexico pour servir de garde du corps à leur petite fille, Pita. Alors qu’un lien fort naît entre eux, l’enfant se fait enlever sous les yeux de son gardien. Un à un, Creasy décide de liquider ses ravisseurs...</p>,
    posterURL:img1},
    {id:2,
    Title:"Titanic",
    date:"1997",
    rate:4,
    description:<p> Southampton, 10 avril 1912. Le paquebot le plus grand et le plus moderne du monde, réputé pour son insubmersibilité, le "Titanic", appareille pour son premier voyage. Quatre jours plus tard, il heurte un iceberg. A son bord, un artiste pauvre et une grande bourgeoise tombent amoureux.</p>,
    posterURL:img2},
    {id:3,
    Title:"American Gangster",
    date:"2008",
    rate:4,
    description:<p> Dans les années 70, les manoeuvres dun dealer de Harlem ayant trouvé un moyen de transporter de la drogue dans les cercueils de soldats américains tués au Vietnam.</p>,
     posterURL:"https://i.pinimg.com/originals/19/00/70/190070552a9d067e81bd5e1b561768cd.jpg"},
    {id:4,
     Title:"I Am Legend",
    date:"2007",
    rate:3,
    description:<p> Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.</p>,
    posterURL:"http://assets.nflxext.com/us/boxshots/hd1080/70060015.jpg"},   
    {id:5,
    Title:"Avatar",
    date:"2009",
    rate:4,
    description:<p> A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home....</p>,
    posterURL:"https://i.pinimg.com/originals/17/aa/71/17aa718c1ab15b482505b8431cf596fc.jpg"},    
    {id:6,
      Title:" Joker",
      date:"2019",
      rate:5,
      description:<p> A Gotham, dans les années 80, Arthur Fleck (Joaquin Phoenix) déambule dans les rues déguisé en clown, une pancarte à la main. Murray Franklin (Robert De Niro) divertit les chaumières du haut de son show télévisé et Thomas Wayne (Brett Cullen) embraye pour les élections....</p>,
      posterURL:"https://images-na.ssl-images-amazon.com/images/I/71DqbKVYTpL._AC_SL1380_.jpg"},  
      {id:7,
        Title:"DARK PHOENIX",
        date:"2019",
        rate: 3, 
        description:<p> A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home....</p>,
        posterURL:"https://lumiere-a.akamaihd.net/v1/images/20cs_xmen_dark_phoenix_poster-keyart_2de4ace2.jpeg"},
        {id:8,
          Title:"UNDERWATER",
          date:"2020",
          rate:2,
          description:<p>A crew of underwater researchers must scramble to safety after an earthquake devastates their deep-sea laboratory. But the crew has more than the ocean’s depths to fear.....</p>,
          posterURL:"https://lumiere-a.akamaihd.net/v1/images/p_underwater_20095_c773c46f.jpeg"},
  ])
  
  const[rating,setRating]=useState(1)
  const ratingChanged=(e)=>{
    
    setRating(e)
    }
   const[Search,setSearch] =useState("") 
   const handleChange=(e)=>{
    setSearch(e.target.value)
    }
    
  const [modeleOpen, setIsOpen] = useState(false);
  const[NewMovie,setNewMovie]=useState({})
 
const handlChange=(e)=>{
  setNewMovie({...NewMovie,[e.target.name]:e.target.value})
  }
  const handleClick=(e)=>{
    setList([...List,NewMovie]);
}
  
  function Open() {
    setIsOpen(true);
  }

  function Close() {
    setIsOpen(false);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  return (
    <div className="App">
        <Navbar bg="primary" variant="dark" style={{overflow: 'hidden',
  position: 'fixed',
  top: '0',
  width: '100%'}}>
    <Navbar.Brand href="#home">MOVIES STARS</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link   onClick={Open} type="submit" >Add Movie 
      </Nav.Link>
     
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleChange} />
      <ReactStars 
    count={5}
    size={35}
    edit={true}
    value={rating}
    activeColor="#ffd700"
    onChange={ratingChanged}
  />
    </Form>
  </Navbar>

  <Modal
        isOpen={modeleOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={Close}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add Movies</h2>
        <div className="imp">
          <label> Title:<input type="text"name="Title" style={{width:'500px'}} onChange={handlChange} required/></label><br/>
          <label> date: <input type="text" name="date" style={{width:'500px'}} onChange={handlChange}required /></label><br/>
          <label> rating: <input type="text"  name="rating" style={{width:'500px'}} onChange={handlChange} required/></label><br/>
          <label> posterURL:<input type="url" name="posterURL" style={{width:'500px'}} onChange={handlChange} required/></label><br/>
          <label> description:<textarea type="text" name="description" style={{width:'500px' }} onChange={handlChange}required ></textarea></label><br/>
          
        </div>
          <div className="but">
          <Button style={{backgroundColor:"blue",width:"100px",height:"50px"}} variant="outline-light" onClick={()=>{handleClick();Close();}}
          required>Add</Button><br/><br/>
          <Button style={{backgroundColor:"blue",width:"100px",height:"50px"}} variant="outline-light" onClick={Close}>close</Button>
        </div>
        
      </Modal>
      <div className="header">
      <MovieList new={List} search={Search} rat={rating} />
      
      
      </div>
      <p style={{color:"tomato"}}>@Created By Aymen Meddeb</p>
    </div>
    
  );

}
export default App;

