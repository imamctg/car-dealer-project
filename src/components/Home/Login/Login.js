import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {

    const { loginUser, signInWithGoogle } = useAuth();
    const { register, handleSubmit } = useForm();


    const location = useLocation();
    const history = useHistory();


    const onSubmit = (data) => {

        loginUser(data.email, data.password, location, history);
        console.log(data);
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }


    return (
        <div>
            <div className="div d-flex justify-content-center align-items-center">


                <div className="container">
                    <h3>Please Login</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input
                            className="input-field"
                            name="email"
                            placeholder="Email"
                            type="email"
                            {...register("email", { required: true })}
                        />
                        <br />
                        <input
                            className="input-field"
                            name="password"
                            type="password"
                            placeholder="Password"
                            {...register("password", { required: true })}
                        />
                        <br />

                        <input
                            className="submit-btn btn btn-danger mt-3"
                            type="submit"
                            value="Login"
                        />
                    </form>
                    <p style={{ color: 'green' }}>You are new here please press Register Button</p>

                    <Link to="/register"><input className="submit btn btn-primary" type="submit" value="register" /></Link>
                    <button onClick={handleGoogleSignIn} className="btn btn-success m-2">google sign in</button>

                </div>
            </div>



        </div>
    );
};

export default Login;