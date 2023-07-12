import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PaymentsModal({show , setShow , closeModal, movieDetails , confirmBooking, theatreDetails , selectedSeats,bookingDetails}) {

  const handleClose = closeModal;

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='row  '>
                <div className='col my-2'>
                    <h4>{movieDetails.name}</h4>
                    <small className='fw-bold'>{movieDetails.language}</small>
                    <br/>
                    <small className='fw-bold'>{theatreDetails.name}</small>
                </div>
                <div  className='col'>
                 <h5>{selectedSeats.length} Tickets</h5>
                </div>

                <hr/>

                <div className='row fw-bolder'>
                
                    <div className='col'>
                        Total Amount
                    </div>
                    <div className='col-3'>
                    <p>Rs.  {movieDetails.price * selectedSeats.length}</p>  

                    </div>

                </div>
            </div>
         { bookingDetails && 
            <div>
                <br/>
                {
                    bookingDetails.status==="SUCCESS" ? (
                        <div className='d-flex flex-column align-items-center justify-content-between'>
                            <img src={movieDetails.posterUrl} height={100} width={100}/>
                            <h5>Booking Confirmed</h5>
                            <p >Booking Id :</p>
                            <small className='fw-bold'>{bookingDetails._id}</small>
                            </div>
                    ) : (
                        <div className='d-flex align-items-center justify-content-between'>
                        <img src={movieDetails.posterUrl} height={100} width={100}/>
                        <h5>Booking Failed!!</h5>
                        <p>Please Retry</p>
                        </div>
                    )
                }
            </div>
            }
        </Modal.Body>
        <Modal.Footer className='justify-content-between'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         { !bookingDetails && <Button variant="primary" onClick={confirmBooking}>
            Confirm Payment
          </Button>}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PaymentsModal;

