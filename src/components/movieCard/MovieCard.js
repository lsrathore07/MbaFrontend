import {BsHeartFill} from "react-icons/bs";
import {BiSolidMoviePlay} from "react-icons/bi"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function MovieCard({movie}){
    const {name ,description,posterUrl,language,casts,director,_id}=movie;

    return (
       <>
       <Card  className='mx-4 my-4 bg-black text-light' style={{ width: '18rem',border:"3px solid red" ,minHeight:"25rem"}}>
        <Card.Img style={{height:"25rem"}} variant="top" src={posterUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          Movie HINDI In a post-apocalyptic world, a lone survivor battles against both the remnants of humanity and terrifying creatures in a desperate quest for redemption and the hope of a new beginning.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush ">
          <ListGroup.Item className='d-flex justify-content-between bg-black text-light'> 
          <span style={{fontWeight:"600"}} className='text-justify'>Language :</span>
          <span className='d-flex'>{language}</span>
          </ListGroup.Item>
          <ListGroup.Item className='d-flex justify-content-between bg-black text-light'> 
          <span style={{fontWeight:"600"}} className='text-justify'>Director :</span>
          <span >{director}</span></ListGroup.Item>
          <ListGroup.Item className='d-flex justify-content-between bg-black text-light'> 
          <span style={{fontWeight:"600"}} className='text-justify'>Cast:</span>
          <span className=''>{casts.join(",")}</span></ListGroup.Item>
        </ListGroup>
        <Card.Body>
            <div style={{fontSize:"1.3rem"}} className="d-flex justify-content-between">
            <i><BsHeartFill className="text-danger "/>  60k</i> 
          <Card.Link href={`/movie/${_id}/details`}><i>Trailer</i><BiSolidMoviePlay/>
          </Card.Link>
            </div>
           
        </Card.Body>
      </Card>
       </>
           
        
    )

}

 export default MovieCard;
