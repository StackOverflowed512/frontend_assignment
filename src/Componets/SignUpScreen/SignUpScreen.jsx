import React, { useState } from "react";
import "./SignUpScreen.css";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";

function SignUpScreen() {
  const [Name, setName] = useState("");
  const [PhoneNum, setPhoneNum] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Company, setCompany] = useState("");
  const [isAgency, setIsAgency] = useState("");

  const navigate = useNavigate();

  const storeFormData = (e) => {
    e.preventDefault();

    const existingEmail = JSON.parse(localStorage.getItem("email"));

    if (existingEmail === Email) {
      alert("User already exists!");
      return;
    }

    const hashedPassword = bcrypt.hashSync(Password, 10);

    localStorage.setItem("username", JSON.stringify(Name));
    localStorage.setItem("phone Number", JSON.stringify(PhoneNum));
    localStorage.setItem("email", JSON.stringify(Email));
    localStorage.setItem("password", hashedPassword); // ✅ No JSON.stringify
    localStorage.setItem("company name", JSON.stringify(Company));
    localStorage.setItem("agency", JSON.stringify(isAgency));
    localStorage.setItem("bio", JSON.stringify("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quaerat natus explicabo labore earum quis, rerum quod nobis perspiciatis minus."));

    navigate("/login");
  };

  const [ChangeEyes, setChangeEyes] = useState(false);
  const eyeIcon = () => {
    setChangeEyes((prev) => !prev);
  };

  return (
    <section className="containerOfSignUp">
      <div className="setScreen">
        <div className="headindBox">
          <h1 className="createHeadind">
            Create your <br />
            <span className="headingSpan">PopX account</span>
          </h1>
        </div>

        <form className="signUpForm" onSubmit={storeFormData}>
          <div className="formBox">
            {/* Full Name */}
            <div className="lableBox">
              <input
                type="text"
                name="name"
                id="name"
                placeholder=" "
                required
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="name" className="inputLable">
                Full Name<span>*</span>
              </label>
            </div>

            {/* Phone Number */}
            <div className="lableBox">
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                placeholder=" "
                required
                value={PhoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
              />
              <label htmlFor="phoneNumber" className="inputLable">
                Phone Number<span>*</span>
              </label>
            </div>

            {/* Email */}
            <div className="lableBox">
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" "
                required
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email" className="inputLable">
                Email Address<span>*</span>
              </label>
            </div>

            {/* Password */}
            <div className="passwordBox">
              <input
                type={ChangeEyes ? "text" : "password"}
                name="password"
                id="password"
                placeholder=" "
                required
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password" className="inputLable">
                Password<span>*</span>
              </label>
              <i
                className={`fa-solid ${ChangeEyes ? "fa-eye" : "fa-eye-slash"}`}
                id="eyes"
                onClick={eyeIcon}
                style={{ cursor: "pointer" }}
              ></i>
            </div>

            {/* Company */}
            <div className="lableBox">
              <input
                type="text"
                name="companyName"
                id="companyName"
                placeholder=" "
                value={Company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <label htmlFor="companyName" className="inputLable">
                Company Name
              </label>
            </div>

            {/* Are you Agency */}
            <div className="AgencyBox">
              <p className="Agency">
                Are You Agency<span className="AgencySpan">*</span>
              </p>

              <section className="checkboxContainer">
                <label htmlFor="yes" className="yesLabel">
                  <input
                    type="radio"
                    name="isAgency"
                    id="yes"
                    value="yes"
                    checked={isAgency === "yes"}
                    onChange={(e) => setIsAgency(e.target.value)}
                    required
                  />
                  Yes
                </label>

                <label htmlFor="no" className="noLabel">
                  <input
                    type="radio"
                    name="isAgency"
                    id="no"
                    value="no"
                    checked={isAgency === "no"}
                    onChange={(e) => setIsAgency(e.target.value)}
                  />
                  No
                </label>
              </section>
            </div>
          </div>

          <div className="buttonBox">
            <button className="CreateAccountBtn">Create Account</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUpScreen;
