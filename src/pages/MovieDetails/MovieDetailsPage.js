import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar"
import ReactPlayer from "react-player";
import { CSpinner } from "@coreui/react";
import { getMovieById } from "../../api/movie.api";
import { Link, useParams } from "react-router-dom";

function MovieDetail() {

    const [movieDetails, setMovieDetail] = useState();
    const { movieId } = useParams()

    const fetchMovieDetails = async () => {
        const movieDetails = await getMovieById(movieId)
        console.log(movieDetails)
        setMovieDetail(movieDetails.data)

    }

    useEffect(() => {
        fetchMovieDetails()
    }, [])

    return <div>
        <Navbar />
        <div className="bg-light">
            {(!movieDetails) ? <CSpinner color="success" variant="grow" /> : <>
                <div className="bg-dark" style={{ border: "4px solid black" }}>
                    <ReactPlayer url={movieDetails.trailerUrl} controls={true} width="100vw" height="40vh" />
                </div>

                <div className="row my-4 mx-4">
                    <div className="col-lg-3 col-md-12">
                        <img src={movieDetails.posterUrl} width={300} height={450} />
                    </div>
                    <div className="col-lg-9 col-md-12">
                        <h2 className="text-center">About the Movie</h2>
                        <div>
                            <span>{movieDetails.description}</span>
                            <div className="">
                                <span className="badge bg-danger rounded-pill m-2">{movieDetails.language}</span>
                                <span className="badge bg-danger rounded-pill m-2">{movieDetails.releaseStatus}</span>
                            </div>
                            <hr />
                            <div>
                                <h3>{movieDetails.name}</h3>
                                <h6>Directed by : {movieDetails.director}</h6>
                                <h6>Released on : {movieDetails.releaseDate}</h6>
                                <br />
                                <h5> <u>Cast</u></h5>
                                {
                                    movieDetails.casts.map((name) => {
                                        return <li>{name}</li>
                                    })
                                }
                                <div className="my-5">
                                    
                                    <button type="button" class="btn btn-danger">
                                    <Link to={`/buyTickets/${movieId}`}>
                                    Book Show
                                   </Link>   
                                        
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>}
        </div>

    </div>
}
export default MovieDetail;