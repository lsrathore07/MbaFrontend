import axios from "axios";
import { TOKEN } from "../utils/constants";

const BASE_URL=process.env.REACT_APP_MBA_BECKEND_URL;

export const getAllMovies = async()=>{
   
   try{
     const res = await axios.get(`${BASE_URL}/mba/api/v1/movies`,{ 
        headers:
       { 
        "x-access-token":localStorage.getItem(TOKEN)
    }})
    return res

}
    catch(err){
        console.log(err)
    }
}


export const getMovieById = async(id)=>{
   
    try{
      const res = await axios.get(`${BASE_URL}/mba/api/v1/movies/${id}`,{ 
         headers:
        { 
         "x-access-token":localStorage.getItem(TOKEN)
     }})
     return res
 
 }
     catch(err){
        throw new Error("Internal error")
         console.log(err)
     }
 }