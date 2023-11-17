import './signUp.css';
function SignUp(){
    return(
        <div className="full min-vw-100 d-flex row w-100">
            <div className="text-light left text-start w-50 ms-5 col-sm">
            <h1 className='mb-3 pt-3'><i>Sign Up</i></h1>
            <h6><i>First Name</i></h6>
            <input className="form-control inp" placeholder='Enter your first name' type='text' required></input>
            <h6><i>Middle Name</i></h6>
            <input className="form-control inp" placeholder='Enter your middle name' type='text'></input>
            <h6><i>Last Name</i></h6>
            <input className="form-control inp" placeholder='Enter your last name' type='text'></input>
            <h6><i>Email Address</i></h6>
            <input className="form-control inp" placeholder='Enter your email address' type='email'></input>
            <h6><i>Phone Number</i></h6>
            <input className="form-control inp" placeholder='Enter your phone number' type='number'></input>
            <h6><i>Password</i></h6>
            <input className="form-control inp" placeholder='Enter your Password' type='password'></input>
            <h6><i>Re-Password</i></h6>
            <input className="form-control inp" placeholder='Re-enter your password' type='password'></input>
            <button className='btn btn-success button'>Sign Up</button>
            </div>
            <div className='text-light text-start col-sm right ms-5 pt-2 me-5'>
                <h1 className='text-warning text-center'><i>E-kart</i></h1>
                <h2><i>Embark on a Digital Odyssey: Your Premier Destination for Elevated E-Commerce Excellence</i></h2>
                <h3><i>Welcome to the digital marketplace where desires meet convenience, and every click opens the door to a world of curated elegance</i></h3>
                <h3><i>Step into a realm where style knows no bounds and every purchase is a statement of sophistication. Welcome to your online shopping sanctuary.</i></h3>
                <h3><i>Step into a virtual boutique where every click is an invitation to discover the extraordinary. Your journey into the world of sophisticated online shopping starts now.</i></h3>
                <h3><i>In the realm of pixels and possibilities, we invite you to explore a curated collection that transcends trends and redefines the art of online shopping.</i></h3>
            </div>
        </div>
    )
}
export default SignUp;