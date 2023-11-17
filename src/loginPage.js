import './loginPage.css';
function Login(){
    const outerDiv = {
        borderRadius:"10px"
    };
    const inp = {
        width:"350px"
    };
    return(
        <body className='text-start bg-dark min-vh-100 w-100' style={outerDiv}>
            <div className=" ms-2 text-light inner-div" >
                <h1><i>Login</i></h1>
                <h6 ><i>Username</i></h6>
                <input placeholder='Please enter your Username' className='form-control mb-2 mt-2' style={inp}></input>
                <h6><i>Password</i></h6>
                <input type='password' placeholder='Please enter your password' className='form-control ' style={inp}></input>
                <div>
                    <button className='btn btn-success mt-4 mb-2' style={inp}><i>Loign</i></button>
                </div>
                <div>
                    <p><b>Dont have an account ? Sign Up</b></p>
                    <button className='btn btn-warning mb-3' style={inp}><i>Sign Up</i></button>
                </div>
            </div>
        </body>
    )
}
export default Login;