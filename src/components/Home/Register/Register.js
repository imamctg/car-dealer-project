import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';



const Register = () => {

    const history = useHistory();
    const { registerUser } = useAuth();
    const { register, handleSubmit } = useForm();



    const onSubmit = (data) => {

        registerUser(data.email, data.password, data.name, history);
        console.log(data);
    };


    return (
        <div className="login-form">
            <div>
                <h2>Create Account</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="input-field"
                        name="name"
                        placeholder="name"
                        type="name"
                        {...register("name", { required: true })}
                    />
                    <br />
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
                        value="Register"
                    />
                </form>
                <div>................ Or ...................</div>
                <p>Already Have an account? Please <Link to='./login'><button className="btn btn-success ms-1">Log In</button></Link> </p>
            </div >
        </div >
    );
};

export default Register;