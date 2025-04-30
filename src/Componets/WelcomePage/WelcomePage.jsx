import React from "react";
import "./WelcomePage.css";
import { Link } from "react-router-dom";



function WelcomePage() {
  return (
    <>
      <main>
        {/* div For Mobile Size Look */}
        <div className="Container">
          {/* div For last  */}

          <div className="SmallContainer">
            <section className="WelcomeBox">
              <h1 className="Welcome">Welcome to PopX</h1>
              <h2 className="ShortInfo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
            </section>

            <ul>
              <li className="CreateAccountLi">
                <Link
                  to="/signup"
                  className="CreateAccountLink"
                  title="Create a new account on PopX"
                >
                  Create Account
                </Link>
              </li>

              <li className="LoginLi">
                <Link
                  to="/login"
                  className="LoginLink"
                  title="Login if you already have an account"
                >
                  Already Registered?Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default WelcomePage;
