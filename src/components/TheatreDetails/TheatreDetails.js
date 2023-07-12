import { Link } from "react-router-dom";


function TheatreDetails({ theatresData ,selectedMovie}) {
    return <div>
        {theatresData.map((theatre) => {
            return <>
               <Link to={`/buyTickets/${selectedMovie}/${theatre._id}`} className="text-decoration-none fw-bolder">
                <div style={{border:"1px solid grey",cursor:"pointer"}} className="row py-4 cursor-pointer">
                <div className="col"><h5>{theatre.name}</h5></div>
                <div className="col text-success">
                    <i className="bi bi-phone-fill text-success"></i>
                    m-Ticket
                </div>

                <div className="col text-danger">
                    <i className="bi bi-cup-straw text-danger"></i>
                    Food And Beverages
                </div>
                </div>
            </Link>
             </>
        })}
    </div>
  
   
}

export default TheatreDetails;