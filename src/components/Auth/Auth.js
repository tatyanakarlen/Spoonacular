import { auth, googleProvider } from '../../config/firebase-config';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useState, useRef } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

const Auth = () => {
  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate();
  const refEmail = useRef(null);
  const refPassword = useRef(null);
  const onClear = () => {
    refEmail.current.value = '';
    refPassword.current.value = '';
  };

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('You have succesfully signed up! Please log in');
      // setIsUserLoggedIn(true);
    } catch (err) {
      console.log(err);
    }
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="auth-page-container">
      <div className="sign-in">
        <h1>Welcome!</h1>
        <h5>Continue with Google or sign-in manually</h5>

        <button class="log-in-with-google-btn" onClick={signInWithGoogle}>
          <img
            width="23"
            height="23"
            src="https://img.icons8.com/color/48/google-logo.png"
            alt="google-logo"
          />
          Log in with Google
        </button>
        <div class="separator">or</div>

        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button class="sign-in-btn" onClick={signIn}>
          Sign in
        </button>

        <hr></hr>
        <>
          <button className="sign-up-modal-toggle-btn" onClick={toggleShow}>
            Create new account
          </button>

          <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
            <MDBModalDialog centered>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>Sign up</MDBModalTitle>
                  <MDBBtn
                    className="btn-close"
                    color="none"
                    onClick={toggleShow}
                  ></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                  <div className="sign-up-input-container">
                    <label>Email</label>
                    <input
                      ref={refEmail}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="sign-up-input-container">
                    <label>Password</label>
                    <input
                      ref={refPassword}
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn
                    className="sign-up-btn"
                    onClick={() => {
                      signUp();
                      toggleShow();
                      onClear();
                    }}
                  >
                    Sign up
                  </MDBBtn>
                  <MDBBtn
                    className="cancel-btn"
                    color="secondary"
                    onClick={toggleShow}
                  >
                    Cancel
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </>
      </div>
    </div>
  );
};

export default Auth;
