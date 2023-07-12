import axios from "axios"

const BASE_URL=process.env.REACT_APP_MBA_BECKEND_URL

export const signIn= async (user)=>{
    try{
        const response =await axios.post(`${BASE_URL}/mba/api/v1/auth/signin`,user)

        const {name , userId , email , userTypes , userStatus , _id , accessToken}= response.data;
        
        if(accessToken){
    
            localStorage.setItem("name",name)
            localStorage.setItem("userId",userId)
            localStorage.setItem("email",email)
            localStorage.setItem("status",userStatus)
            localStorage.setItem("userTypes",userTypes)
            localStorage.setItem("token",accessToken)
            localStorage.setItem("id",_id)

        }
        return response.data
    } 
   catch(err){
    console.log(err)
    return err;

   }
}

export const signUp =async (user)=>{
    try{
        await axios.post(`${BASE_URL}/mba/api/v1/auth/signup`,user)
    }catch(err){
        console.log(err)
    }
}