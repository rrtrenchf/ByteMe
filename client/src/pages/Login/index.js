
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
            props.history.push("/playlist")
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
                    position: "absolute",
                    // zIndex: "3"
                    
                }}>
                <p class="py-5 text-center"></p>
                <h1 className="header"
                style={{
                    textAlign: "center",
                    fontFamily: "'Fjalla One', sans-serif",
                    fontSize: "100px"
                }}
                >Sweater Weather</h1>
                <div className="form-container">
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