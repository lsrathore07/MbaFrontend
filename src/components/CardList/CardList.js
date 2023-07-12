import { BsCardList, BsFillBuildingFill, BsFillPeopleFill, BsFilm } from "react-icons/bs";
import CWidget from "../CWidget/CWidget";
import { keys } from "../../utils/constants";


function CardList(props){

const {counterInfo} = props;

    return  <div className="row ">

     <CWidget id={keys.THEATRE} value={counterInfo.theatres} icon={<BsFillBuildingFill className="text-danger display-6"/>} text="Number of theatres" title={"Theatres"} />
     <CWidget id={keys.MOVIE} value={counterInfo.movies} icon={<BsFilm className="text-danger display-6"/>} text="Number of movies" title="Movies" />
     <CWidget id={keys.BOOKING} value={counterInfo.bookings} icon={<BsCardList className="text-danger display-6"/>} text="Number of bookings" title={"Bookings"} />
     <CWidget id={keys.USERS} value={counterInfo.users} icon={<BsFillPeopleFill className="text-danger display-6"/>} text="Number of users" title={"Users"} />
     
    </div>
}

export default CardList;