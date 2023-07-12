import MovieCard from "../movieCard/MovieCard";

function MovieList(props){

   const renderMovies=(movies)=>{
    return moviesData.map((movie)=>{
        return <MovieCard movie={movie}/>
    })
   }

    const {moviesData}=props;
  return <div className="bg-light py-3">
    <h2>Recommended Movies</h2>
   <div className="d-flex flex-wrap justify-content-center " style={{}}>
    {renderMovies()}
  </div>
  </div>
}

export default MovieList;