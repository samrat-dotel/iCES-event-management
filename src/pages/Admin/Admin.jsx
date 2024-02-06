import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import styles from "../Admin/Admin.module.css";
import axios from "axios";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formState, setFormState] = useState(null);

  useEffect(() => {
    const loggedIn = document.cookie.includes("logged_in=true");
    if (loggedIn) {
      window.location.href = "/adminpanel";
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/auth/sign_in", {
        email,
        password,
      });

      if (response.status === 200) {
        setFormState("success");
        document.cookie = "logged_in=true; path=/";

        window.location.href = "/adminpanel";
      } else {
        setFormState("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setFormState("error");
    }
  };

  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.titles}>
            <h1 className={styles.title}>Are you the admin?</h1>
            <h1 className={styles.title}>If yes, then prove it.</h1>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="email">
              Email:
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="password">
              Password:
            </label>
            <input
              className={styles.input}
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={styles.togglePassword}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button type="submit" className={styles.submitButton}>
            Log in
          </button>
        </form>
        {formState === "success" && (
          <p style={{ color: "green", textAlign: "center" }}>
            Login successful!
          </p>
        )}
        {formState === "error" && (
          <p style={{ color: "red", textAlign: "center" }}>
            Login failed. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default Admin;
