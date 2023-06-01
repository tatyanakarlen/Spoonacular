import { auth, googleProvider } from '../../config/firebase-config';
import './Auth.css'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useState } from 'react';
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

  
  //   console.log(auth?.currentUser?.photoURL);
  // photo URL if user is signed in with Gooogle

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
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
     <MDBBtn onClick={toggleShow}>Create new account</MDBBtn>

      <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Sign up</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
               <input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password..."
        onChange={(e) => setPassword(e.target.value)}
      />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Cancel
              </MDBBtn>
              <MDBBtn onClick={() => {
                signUp()
                toggleShow()
              }}>Sign up</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      {/* <h1>Welcome Back!</h1>
      <input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signUp}>Sign Up</button>
      <button onClick={signIn}>Sign In</button>
      <button onClick={signInWithGoogle}> Sign in with Google</button>
      <button onClick={logOut}>Log out</button>
      <button onClick={() => console.log('current user', auth.currentUser)}>Check user</button> */}
    </div>
    
  );
};

export default Auth;
