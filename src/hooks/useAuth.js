import { useNavigate } from "react-router-dom"
import { TOKEN, USER_TYPES, userTypes } from "../utils/constants"
import { signIn } from "../api/auth.api"
import { useEffect } from "react"


export const useAuth=()=>{
    const navigate=useNavigate()
    const initialState={  userId: "", password: "" }
    
    useEffect(()=>{
        redirect();
       },[])
  
    const redirect=()=>{
      const userType = localStorage.getItem(USER_TYPES);
      const token = localStorage.getItem(TOKEN);

      if(!userType || ! token){
        return
      }

      if(userType === userTypes.ADMIN){
        navigate("/admin")
      }
      else if(userType===userTypes.CLIENT){
        navigate("/client")
      }
      else{
        navigate("/")
      }

      

    }
    const onLogin =async (values, props) => {
     
        const userDetails={userId:values.userId,password:values.password}
        const loginResponse= await signIn(userDetails);
        props.setSubmitting(false);
        props.setErrors({result : "...." })

        redirect();   
      }

      return {initialState,redirect,onLogin};
    
}

