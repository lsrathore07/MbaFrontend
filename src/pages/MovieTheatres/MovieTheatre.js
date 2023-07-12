import { useParams } from "react-router-dom";
import Nav from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { getTheatresForAMovie } from "../../api/theatres.api";
import { getMovieById } from "../../api/movie.api";
import { Spinner } from "react-bootstrap";
import TheatreDetails from "../../components/TheatreDetails/TheatreDetails";


function MovieTheatre(){

 const {movieId : selectedMovie} =useParams()
 const [theatresData,setTheatresData] = useState([])
 const [movieDetails,setMovieDetails] = useState(null)
 const [isLoading,setIsLoading]= useState(true)

 const getTheatres=async ()=>{
     const theatresData = await getTheatresForAMovie(selectedMovie)
       setTheatresData(theatresData.data)
  
 }

 const getMovieDetails=async ()=>{
    const movieDetails =await getMovieById(selectedMovie)
    setMovieDetails(movieDetails.data)
   
 }

 const init=async()=>{
    await Promise.all([getMovieDetails(),getTheatres()])
    setIsLoading(false)
 }
 
 useEffect(()=>{
   init()
  },[])

    return(
        <div>
        <Nav/>
     {isLoading ? ( <Spinner/>) : ( 
     <div className="bg-black vh-100 text-white text-center">
        <div className="py-2"><h3>{movieDetails.name}</h3></div>
                            <span>{movieDetails.description}</span>
                            <div className="text-center">
                                <span className="badge bg-danger rounded-pill m-2">{movieDetails.language}</span>
                                <span className="badge bg-danger rounded-pill m-2">{movieDetails.releaseStatus}</span>
                            </div>
                            <hr />
                            <div className="">
                                
                                <h6>Directed by : {movieDetails.director}</h6>
                                <h6>Released on : {movieDetails.releaseDate}</h6>
                                <br /> 
                                <hr/>     
        </div>
                               <div style={{margin:"0 auto",width:"70vw"}} className="bg-light text-dark">
                              <TheatreDetails theatresData={theatresData} selectedMovie={selectedMovie}/>
                               </div>
        </div>
        ) }
        </div>
    )
}

export default MovieTheatre;