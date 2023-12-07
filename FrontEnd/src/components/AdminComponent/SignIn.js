import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignIn = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    async function save(event) {
        event.preventDefault();
        try {
            var response = await axios.post("http://localhost:8282/admin/login",
                {
                    "username": username,
                    "password": password
                });

            if (response.status === 200 && response.data.username === username && response.data.password === password) {
                const username = response.data.username;

                sessionStorage.setItem('admin', username);
                navigate('/admindashbord');
                toast.success("Welcome " + response.data.username+ " !!!", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                });

            } else {
                setErrorMessage('Invalid email or password');

            }

        }
        catch (err) {
            toast.error("Login Failed", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-9">
                    {errorMessage && (
                        <div className="alert alert-danger mt-3">{errorMessage}</div>
                    )}
                    <h2 className="mb-3">Admin Login</h2>
                    <form onSubmit={save} className="w-100">
                        <div className="form-group">
                            <br></br>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(event) => {
                                    setUsername(event.target.value);
                                }}
                                placeholder='Enter Username'
                                required
                            />
                        </div>
                        <div className="form-group">
                            <br></br>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                                placeholder='Enter Password'
                                required
                            />
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                        <pre></pre>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignIn;
