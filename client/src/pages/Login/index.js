
import React, { useEffect } from "react";
import { Header } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import LoginForm from "../../components/LoginForm";
import { loginUser } from "../../actions/authActions";
import { Link } from "react-router-dom";


const Login = (props) => {
    // access to the isAuthenticated property from the auth reducer state
    const { isAuthenticated } = useSelector(state => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push("/pageone")
        }

    })

    const renderFormMessage = () => {
        return <>New to us ? <Link to="/register">Register</Link></>
    }

    const onFormSubmit = (formVal) => {
        dispatch(loginUser(formVal));
    }

    return (
     
   
        <div >
            <div className="loginBackground"
                 style={{
                    backgroundImage: "url('https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(11).jpg')",
                    height: "100vh",
                    width: "100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    display: "flex",
                    // position: "absolute",
                    // zIndex: "3"
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <h1 className="header"
                    style={{
                        textAlign: "center",
                        fontFamily: "'Fjalla One', sans-serif",
                        fontSize: "100px",
                        color: "black",
                        marginTop: "-300px"
                    }}
                >Sweater Weather</h1>
                    <p className="py-3 text-center"></p>
                <div className="form-container" style={{ position: "fixed" }} >
                  <p className=" text-center" style={{ margin: "150px" }}></p>
                    
                    <Header as='h2' secondary="true" textAlign='center' style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "bold", fontSize: "20px" }}>
                        Login to your account
                    </Header>
                    <LoginForm
                        renderMessage={renderFormMessage}
                        buttonText="Login"
                        onSubmit={onFormSubmit}
                    />
                </div>
            </div>

        </div>
    )
}

export default Login;