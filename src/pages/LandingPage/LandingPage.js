import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import MyCarousel from "../../components/carousel/MyCarousel"
import { getAllMovies } from "../../api/movie.api"
import { CSpinner } from "@coreui/react"
import MovieList from "../../components/MovieList/Movielist"

let allMoviesData=[]
function LandingPage(){

const [moviesData,setMoviesData]=useState(null)


const filterMovies=(searchValue)=>{
 console.log(allMoviesData)
  
 const filteredMovies = allMoviesData.filter((movie)=>{
  const movieName = movie.name.toLowerCase()
  console.log(movieName)
  return movieName.startsWith(searchValue.toLowerCase());
 }) 

 setMoviesData(filteredMovies);
}

const fetchMovies=async()=>{
   try{
    const movies =await getAllMovies();
    allMoviesData=movies.data;
    setMoviesData(movies.data)
   }
   catch(err){
     console.log(err)
   }
   }


  useEffect(()=>{
    fetchMovies()
  },[])



    return (
        <div className="">

    
            <Navbar filterMovies={filterMovies}/>
            <MyCarousel/>

            <div className="text-center">
                
                {
                    moviesData===null ? <CSpinner color="primary" variant="grow"/> : <MovieList moviesData={moviesData}/>
                }
            </div>
        </div>

    )
    }

export default LandingPage