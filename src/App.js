import './App.css';
import Login from './pages/Auth';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import MovieDetail from './pages/MovieDetails/MovieDetailsPage';
import Admin from './pages/Admin/Admin';
import MovieTheatre from './pages/MovieTheatres/MovieTheatre';
import Booking from './pages/Bookings/Booking';

function App() {
  return (
    <div>


      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" />
          <Route path="/" element={<LandingPage/>}></Route>   
          <Route path="/movie/:movieId/details" element={<MovieDetail/>}></Route>
          <Route path="/buyTickets/:movieId" element={<MovieTheatre/>}></Route>
          <Route path="/buyTickets/:movieId/:theatreId" element={<Booking/>}></Route>
          <Route path="/admin" element={<Admin/>} />
 
        </Routes>
      </Router>
     
     </div>
  );
}

export default App;
