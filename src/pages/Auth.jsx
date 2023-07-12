import BgImage from "../images/image.js.jpg"
import React from "react";
import {Field,ErrorMessage,Formik,Form} from "formik"
import { formValidator } from "../validators/auth.validator";
import { useAuth } from "../hooks/useAuth";

function Login() {
 const {initialState,onLogin}=useAuth( )
    

    return (
    <div style={{
        backgroundImage:`url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
        width:"100vw",
        padding:"2rem"
        }}  className="text-white "
        >
        <div>
        <div style={{
            background:"0 0 0 0.3px",
            backgroundColor:"gray",
            backdropFilter:"blur ",
            border:"1px solid yellow",
            borderRadius:"20px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"25rem"
        }}>
            <div  className="d-flex p-4">
                <Formik 
                 initialValues={initialState}
                 validate={formValidator}
                 onSubmit={onLogin}
               >
                 {({ isSubmitting }) => (
           <Form className="d-flex flex-column text-center">
            <h1 className="my-2 mt-2 ">LogIn</h1>
             <Field
               type="text"
               name="userId"
               placeholder="Enter your userId"
              className="form-control my-2"
             />
             <ErrorMessage name="userId" component="div" className="pb-2"/>

             <Field
               type="password"
               name="password"
               placeholder="Enter your password"
               className="form-control my-2"
             />
             <ErrorMessage name="password" component="div" className="pb-2"/>
         

             <button className="form-control font-bold" type="submit" disabled={isSubmitting}>
               login
             </button>
             <ErrorMessage name="result" component="div" className="pb-2"/>

           </Form>
         )}
           </Formik>
            </div>
            </div>
        </div>
    </div>        
    )

}

export default Login;