// Install first:
// npm install firebase react-router-dom react-icons

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { FaGoogle } from "react-icons/fa";

// 🔥 Firebase Config (Replace with your keys)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ---------------- LOGIN ----------------
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
    alert(`Logged in as ${role}`);
    navigate("/");
  };

  const handleGoogle = async () => {
    await signInWithPopup(auth, provider);
    alert("Google Login Success");
    navigate("/");
  };

  return (
    <div className="auth-container">
      <h2>SignTaxi Login</h2>

      <form onSubmit={handleLogin} className="space-y-3">
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

        <select onChange={(e) => setRole(e.target.value)} value={role}>
          <option value="user">User</option>
          <option value="driver">Driver</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Login</button>
      </form>

      <button onClick={handleGoogle}>
        <FaGoogle /> Login with Google
      </button>

      <div className="links">
        <Link to="/register">Register</Link>
        <Link to="/forgot">Forgot Password</Link>
        <Link to="/otp">OTP Login</Link>
      </div>
    </div>
  );
}

// ---------------- REGISTER ----------------
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Registration Successful");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <h2>SignTaxi Register</h2>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Create Account</button>
      </form>
      <Link to="/login">Back to Login</Link>
    </div>
  );
}

// ---------------- FORGOT PASSWORD ----------------
function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    await sendPasswordResetEmail(auth, email);
    alert("Password Reset Email Sent");
  };

  return (
    <div className="auth-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleReset}>
        <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
}

// ---------------- OTP LOGIN ----------------
function OTPLogin() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);

  const sendOTP = async () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
    });

    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phone,
      window.recaptchaVerifier
    );
    setConfirmation(confirmationResult);
    alert("OTP Sent");
  };

  const verifyOTP = async () => {
    await confirmation.confirm(otp);
    alert("OTP Login Success");
  };

  return (
    <div className="auth-container">
      <h2>OTP Login</h2>
      <div id="recaptcha-container"></div>
      <input type="text" placeholder="Phone (+91...)" onChange={(e) => setPhone(e.target.value)} />
      <button onClick={sendOTP}>Send OTP</button>
      <input type="text" placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} />
      <button onClick={verifyOTP}>Verify OTP</button>
    </div>
  );
}

// ---------------- APP ROUTER ----------------
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/otp" element={<OTPLogin />} />
        <Route path="/" element={<h1>Welcome to SignTaxi Dashboard 🚖</h1>} />
      </Routes>
    </Router>
  );
}
