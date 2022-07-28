import Footer from "./Footer"
import Header from "./Header"

const SignUpCustPage = () => {
    return (
        <>
            < Header />

            <section className="heading-container registerHeadingContainer">
                <div className="center-container userFormContainer">

                    <div>
                        <h1>Good to see you.</h1>
                        <div className="registerHeadingComments">
                            <p>Want to become a Service Provider? <a className="byTheWayLinks" href="signUpPro.html">sign up</a></p>
                            <p>Already a customer? <a href="login.html" className="byTheWayLinks">Login</a></p>
                        </div>
                    </div>

                    <div className="heading-btn">
                        <div>
                            <form className="userForm">

                                <input type="button" id="createWithGoogle" name="createWithGoogle" className="userFormInput userSearchBtn" value="Sign Up with Google" />
                                <p>OR</p>
                                <input type="email" id="email" name="email" className="userFormInput" placeholder="Email address" required />
                                <input type="text" id="firstName" name="firstName" className="userFormInput" placeholder="First Name" required />
                                <input type="text" id="surname" name="surname" className="userFormInput" placeholder="Surname" required />
                                <input type="password" id="passwd" name="passwd" className="userFormInput" placeholder="Password" required />
                                <input type="password" id="confirmPwd" name="confirmPwd" className="userFormInput" placeholder="Confirm Password" required />
                                <div className="rowFlex termsCheck">
                                    <input type="checkbox" id="tAndC" name="tAndC" className="userFormInput" required />
                                    <p>I agree to the <a className="byTheWayLinks">Policy</a> and the <a className="byTheWayLinks">Terms and Conditions</a> of ServicesToYou.</p>
                                </div>
                                <input type="submit" id="createAccount" name="createAccount" className="userFormInput userSearchBtn" value="Create Account" />

                            </form>
                        </div>
                    </div>
                </div>
            </section>

            < Footer />
        </>
    )
}

export default SignUpCustPage