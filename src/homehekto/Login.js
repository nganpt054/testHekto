export default function Login(){
    return(
        <div className="login">
            <p className="login__lg">Login</p>
            <p className="login__pl">Please login using account detail bellow.</p>
            <input className="login__email" type="email" placeholder="Email Address"></input><br></br>
            <input className="login__pass" type="password" placeholder="Password"></input>
            <a href="" className="login__fyo">Forgot your password?</a>
            <button className="login__signin">Sign In</button><br></br>
            <a href="" className="login__cra">Don’t have an Account?Create account</a>
        </div>
    );
}