import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTheatresById } from "../../api/theatres.api";
import { getMovieById } from "../../api/movie.api";
import { Button, Spinner } from "react-bootstrap";
import Nav from "../../components/Navbar/Navbar";
import "./Booking.css"
import Cinema from "../../components/Cinema/Cinema";
import PaymentsModal from "../../components/Payments/Payments";
import { createBooking } from "../../api/bookings.api";


function Booking() {

    const { movieId, theatreId } = useParams()
    console.log(theatreId)
    const [theatreDetails, setTheatreDetails] = useState([])
    const [movieDetails, setMovieDetails] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [selectedSeats, setSelectedSeats] = useState([])
    const [showPaymentModal, setShowPaymentModal] = useState(false)
    const [bookingDetails,setBookingDetails]=useState(null)

    const proceedPayment = () => {
        setShowPaymentModal(true)
    }

    const confirmBooking = async ()=>{
        const data={
            theatreId:theatreId,
            movieId:movieId,
            userId:localStorage.getItem("id"),
            noOfSeats:selectedSeats.length,
            totalCost:(selectedSeats.length * movieDetails.price),
            timing:"EVENING"
            
        }

        const booking = await createBooking(data)
        
        // const payment = await makePayment();

        const paymentSuccess=true;
        if(paymentSuccess){
          booking.data.status="SUCCESS"
        }else{
            booking.data.status="FAILED"
        }

        setBookingDetails(booking.data)

    }

    const getTheatreDetails = async () => {
        const theatresData = await getTheatresById(theatreId)
        setTheatreDetails(theatresData.data)

    }

    const getMovieDetails = async () => {
        const movieDetails = await getMovieById(movieId)
        setMovieDetails(movieDetails.data)
    }

    const init = async () => {
        await Promise.all([getMovieDetails(), getTheatreDetails()])
        setIsLoading(false)
    }

    useEffect(() => {
        init()
    }, [])


  const closeModal=()=>{
        setShowPaymentModal(false);
        setBookingDetails(null);
    }

    return <div >
        <Nav />
        <div className="bg-black vh-100 text-center fullView">
            {
                (isLoading) ? <Spinner /> :
                    <div className="text-light">

                        <h2>{movieDetails.name}</h2>
                        <div>
                            <ShowCase />
                            <Cinema selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} movieDetails={movieDetails} />

                            <p className="info">
                                You have selected <span className="count">{selectedSeats.length}</span>{' '}
                                seats for the price of{' '}
                                <span className="total">
                                    Rs {selectedSeats.length * movieDetails.price}
                                </span>
                            </p>

                            <Button onClick={proceedPayment} variant="success" size="md">Proceed To Payment</Button>
                        </div>

                    </div>
            }
        </div>
        {!isLoading &&
            <PaymentsModal setShow={setShowPaymentModal} show={showPaymentModal} movieDetails={movieDetails} selectedSeats={selectedSeats} theatreDetails={theatreDetails} confirmBooking={confirmBooking} bookingDetails={bookingDetails} closeModal={closeModal}/>

        }

    </div>

}


export default Booking;

function ShowCase() {
    return (
        <ul className="ShowCase">
            <li>
                <span className="seat" /> <small>N/A</small>
            </li>
            <li>
                <span className="seat selected" /> <small>Selected</small>
            </li>
            <li>
                <span className="seat occupied" /> <small>Occupied</small>
            </li>
        </ul>
    )
}
