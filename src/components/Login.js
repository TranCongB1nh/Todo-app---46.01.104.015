import React, { useContext, useState } from "react";
import * as Components from '../Component';
import '../css/Login.css'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged,
    signOut} from "firebase/auth";
import {auth} from '../firebase-config';
import { MyContext } from "../contexts/MyContext";

export function Login() {
    const [signIn, toggle] = useState(true);
    const [signinEmail, setSigninEmail] = useState("");
    const [signinPassword, setSigninPassword] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");

    
    const {user, setUser, isLogged, setIsLogged} = useContext(MyContext);

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const signup = async () => {
        try  { 
            const user = await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };
    const signin = async () => {
        try  {
            const user = await signInWithEmailAndPassword(auth, signinEmail, signinPassword);
            sessionStorage.setItem("isLogged", !isLogged)
            setIsLogged(sessionStorage.getItem("isLogged"));
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };
    const logout = async () => {
        await signOut(auth);
        sessionStorage.setItem("isLogged", false)
        setIsLogged(false)
    };

      return(
        <div className="login-container"> 
        {isLogged === false ? (
          <Components.Container>
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Tạo tài khoản</Components.Title>
                      <Components.Input type='email' placeholder='Địa chỉ Email' 
                        onChange={(event) => {
                            setSignupEmail(event.target.value);
                            }}
                        />
                      <Components.Input type='password' placeholder='Mật khẩu' 
                        onChange={(event) => {
                            setSignupPassword(event.target.value);
                            }}
                        />
                      <Components.Button onClick={signup}>Đăng ký</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form>
                       <Components.Title>Đăng ký</Components.Title>
                       <Components.Input type='email' placeholder='Địa chỉ Email' 
                       onChange={(event) => {
                            setSigninEmail(event.target.value);
                            }} 
                        />
                       <Components.Input type='password' placeholder='Mật khẩu' 
                       onChange={(event) => {
                            setSigninPassword(event.target.value);
                            }}
                        />
                       <Components.Anchor href='#'>Quên mật khẩu ?</Components.Anchor>
                       <Components.Button onClick={signin}>Đăng nhập</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Chào mừng trở lại!</Components.Title>
                      <Components.Paragraph>
                          Hãy đăng nhập tài khoản của bạn để được hưởng nhiều tiện ích
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Đăng nhập
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Xin chào!</Components.Title>
                        <Components.Paragraph>
                            Tham gia cùng chúng tôi ngay hôm nay!
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Đăng ký
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

            </Components.Container>
        ) : (    
            <div>
                <h4> Tài khoản đang đăng nhập: </h4>
                <span className="user-email">{user?.email}</span>
                <Components.Button onClick={logout}>Đăng xuất</Components.Button>
                
            </div> 
        )}
        </div>
        
    )
}

