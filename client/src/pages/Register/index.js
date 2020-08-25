
import React from 'react';
import { Header } from 'semantic-ui-react';
import RegisterForm from "../../components/RegisterForm";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../actions/authActions";

const Register = () => {

    const dispatch = useDispatch();

    const renderFormMessage = () => {
        return <>Already Registered ? <Link to="/login">Login</Link></>
    }

    const onFormSubmit = (formVal) => {
        dispatch(registerUser(formVal));
    }

    return (
        <div >
            <div className="registerBackground"
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
                <div className="form-container" >
                    <Header as='h2' secondary="true" textAlign='center'>
                        Register
                    </Header>
                    <RegisterForm
                        renderMessage={renderFormMessage}
                        buttonText="Register"
                        onSubmit={onFormSubmit}
                    />
                </div>
            </div>
        </div>
    )
}

export default Register;