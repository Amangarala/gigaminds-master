import React, { useState } from "react";
import * as Components from './Components';
import './login_signup.css'

function Login() {
  const [userType, setUserType] = useState("User");
  const toggleUserType = (type) => {
    setUserType(type);
  }
  const [signIn, toggle] = React.useState(true);

//   const [signIn, toggleSignIn] = useState(true);
  const [toggleTab, setToggleTab] = useState("User");


const toggleRole=(role)=>{
setToggleTab(role);
}

  return (
    <div className="container" style={{marginTop:'5%'}}>

    
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <div>
            <Components.Title>Create Account</Components.Title>
            <div className="tabs" style={{display:'flex',columnGap:'15px'}}>
              <div
                className={toggleTab === "User" ? "single-tab left active-tab" : "single-tab left"}
                onClick={() => toggleRole("User")}
              >
                <h3>User</h3>
              </div>
              <div
                className={toggleTab === "Admin" ? "single-tab middle active-tab" : "single-tab middle"}
                onClick={() => toggleRole("Admin")}
              >
                <h3>Admin</h3>
              </div>
              <div
                className={toggleTab === "Reviewer" ? "single-tab right active-tab" : "single-tab right"}

                onClick={() => toggleRole("Reviewer")}
              >
                <h3>Reviewer</h3>
              </div>
            </div>
          </div>
          <div className={toggleTab === "User" ? "usersignin" : null}>
            {/* Render User-specific content here */}
            {toggleTab === "User" && (
              <div>
                <Components.Input type='text' placeholder='Name' required />
                <Components.Input type='email' placeholder='Email' required/>
                <Components.Input type='password' placeholder='Password' required />
                <Components.Input type='password' placeholder='Confirm Password' /> 
                <Components.Button>Sign Up</Components.Button>
              </div>
            )}
          </div>
          <div className={toggleTab === "Admin" ? "usersignin" : null   }>
            {/* Render Admin-specific content here */}
            {toggleTab === "Admin" && (
              <div>
                <Components.Input type='text' placeholder='Name' required />
                <Components.Input type='email' placeholder='Email' required/>
                <Components.Input type='password' placeholder='Password' required />
                <Components.Input type='password' placeholder='Confirm Password' /> 
                <Components.Button>Admin Sign Up</Components.Button>
              </div>
            )}
          </div>
          <div className={toggleTab === "Reviewer" ? "usersignin" : "content"}>
            {/* Render Reviewer-specific content here */}
            {toggleTab === "Reviewer" && (
              <div>
                {/* Reviewer-specific content goes here */
                <div>
                <Components.Input type='text' placeholder='Name' required />
                <Components.Input type='text' placeholder='Area of Work' required />
                <Components.Input type='file' placeholder='upload a valid Id' required />
                <Components.Input type='text' placeholder='Experiqance of the field' required />

                    <Components.Input type='email' placeholder='Email' required/>
                <Components.Input type='password' placeholder='Password' required />
                <Components.Input type='password' placeholder='Confirm Password' /> 

                <Components.Button>Reviewer Sign Up</Components.Button>
                    </div>
                }
              </div>
            )}
          </div>
        </Components.Form>
      </Components.SignUpContainer>

      {/* ... (Rest of your code) */}
      <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                  <div>
                  <div>
            <Components.Title>Sign In</Components.Title>
            <br/>
            <div className="tabs"  style={{display:'flex',columnGap:'15px',margin:'auto'}}>
              <div
                className={toggleTab === "User" ? "single-tab left active-tab" : "single-tab left"}
                onClick={() => toggleRole("User")}
              >
                <h3>User</h3>
              </div>
              <div
                className={toggleTab === "Admin" ? "single-tab middle active-tab" : "single-tab middle"}
                onClick={() => toggleRole("Admin")}
              >
                <h3>Admin</h3>
              </div>
              <div
                className={toggleTab === "Reviewer" ? "single-tab right active-tab" : "single-tab right"}
                onClick={() => toggleRole("Reviewer")}
              >
                <h3>Reviewer</h3>
              </div>
            </div>
            
          </div>
          <div className={toggleTab === "User" ? "usersignin" :null}>
            {/* Render User-specific content here */}
            {toggleTab === "User" && (
              <div>
                <Components.Input type='email' placeholder='Email' required/>
                <Components.Input type='password' placeholder='Password' required />
                <Components.Button>Log In</Components.Button>
              </div>
            )}
          </div>
          <div className={toggleTab === "Admin" ? "usersignin" : null}>
            {/* Render Admin-specific content here */}
            {toggleTab === "Admin" && (
              <div>
                <Components.Input type='email' placeholder='Email' required/>
                <Components.Input type='password' placeholder='Password' required />
                <Components.Button>Admin Log in</Components.Button>
              </div>
            )}
          </div>
          <div className={toggleTab === "Reviewer" ? "usersignin" : null}>
            {/* Render Reviewer-specific content here */}
            {toggleTab === "Reviewer" && (
              <div>
                {/* Reviewer-specific content goes here */
                <div>

                    <Components.Input type='email' placeholder='Email' required/>
                <Components.Input type='password' placeholder='Password' required />

                <Components.Button>Reviewer Log In</Components.Button>
                    </div>
                }
              </div>
            )}
          </div>
                        
                    </div>
                  </Components.Form>
             </Components.SignInContainer>
      
      <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         To keep connected with us please login with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Log In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Hello, Friend!</Components.Title>
                       <Components.Paragraph>
                           Enter Your personal details and start journey with us
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                            Get Register Yourself
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

    </Components.Container>
    </div>
  );
}

export default Login;
