import Nav from "../../components/Navbar/Navbar";
import React, { createContext, useEffect, useState } from "react";
import { getAlltheatres } from "../../api/theatres.api";
import { getAllMovies } from "../../api/movie.api";
import { getAllBookings } from "../../api/bookings.api";
import { getAllUsers } from "../../api/users.api";
import CardList from "../../components/CardList/CardList";
import { keys } from "../../utils/constants";
import TheatreTable from "../../components/Tables/TheatreTable/TheatreTable";
import MoviesTable from "../../components/Tables/MoviesTable/MoviesTable";
import BookingsTable from "../../components/Tables/BookingsTable/BookingsTable";
import UsersTable from "../../components/Tables/UsersTable/UsersTable";


export const WidgetContext = createContext()


function Admin(){ 

const [theatresList,settheatresList]=useState([])
const [moviesList,setMoviesList]=useState([])
const [usersList,setUsersList]=useState([])
const [bookingsList,setBookingsList]=useState([])
const [counterInfo,setCounterInfo]=useState({
    theatres:0,
    movies:0,
    bookings:0,
    users:0
})  

const [showMoviesTable,setShowMovieTable]=useState(false)
const [showTheatresTable,setShowTheatresTable]=useState(false)
const [showBookingsTable,setShowBookingsTable]=useState(false)
const [showUsersTable,setShowUsersTable]=useState(false)


const fetchtheatres=async ()=>{
    const theatres= await getAlltheatres()
    settheatresList(theatres.data)

    counterInfo.theatres = theatres.data.length;
    setCounterInfo({...counterInfo})
}

const fetchMovies=async()=>{
    const movies= await getAllMovies()
    setMoviesList(movies.data)

    counterInfo.movies = movies.data.length;
    setCounterInfo({...counterInfo})
}

const fetchBookings=async()=>{
    const bookings= await getAllBookings()
    setBookingsList(bookings.data)

    counterInfo.bookings = bookings.data.length;
    setCounterInfo({...counterInfo})
}

const fetchUsers=async()=>{
    const users= await getAllUsers()
    setUsersList(users.data)

    counterInfo.users = users.data.length;
    setCounterInfo({...counterInfo})
}

const init=async ()=>{
   await Promise.all([fetchMovies(),fetchtheatres(),fetchBookings(),fetchUsers()])
}

useEffect(()=>{
init()
},[])

const onWidgetClick=(id)=>{
    
    setShowTheatresTable(false)
    setShowMovieTable(false)
    setShowBookingsTable(false)
    setShowUsersTable(false)

    if(id===keys.THEATRE){
        setShowTheatresTable(true);
    }
    else if(id===keys.MOVIE){
        setShowMovieTable(true)
    }
    else if(id===keys.BOOKING){
        setShowBookingsTable(true)
    }
    else if(id===keys.USERS){
        setShowUsersTable(true)
    }

}

const show={}

show[keys.THEATRE] = showTheatresTable;
show[keys.MOVIE]   = showMoviesTable;
show[keys.BOOKING] = showBookingsTable;
show[keys.USERS]   = showUsersTable; 



  

return <div className="bg-light">
    <Nav/>
    <div className="container text-center">
        <h2>Welcome , {localStorage.getItem("name")}</h2>
        <h6 className="text-secondary">Take a look at your stats below</h6>
       
       <WidgetContext.Provider value={{onWidgetClick,show}}>
       <CardList widgetStatus={{showBookingsTable,showMoviesTable,showTheatresTable,showUsersTable}}  counterInfo={counterInfo}/>
       </WidgetContext.Provider>
      
      
      {showTheatresTable && <TheatreTable theatresList={theatresList}/>}
      {showMoviesTable && <MoviesTable moviesList={moviesList}/>}
      {showBookingsTable && <BookingsTable bookingsList={bookingsList}/>}
      {showUsersTable && <UsersTable usersList={usersList}/>}



    </div>
</div>
}

export default Admin;