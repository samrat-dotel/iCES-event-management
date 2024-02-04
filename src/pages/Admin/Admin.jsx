import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import styles from "../Admin/Admin.module.css";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formState, setFormState] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating form submission
    if (email === "admin@example.com" && password === "password") {
      setFormState("success");
    } else {
      setFormState("error");
    }
  };

  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.formContainer}>
        <div className={styles.titles}>
          <h1 className={styles.title}>Are you the admin?</h1>
          <h1 className={styles.title}>If yes, then prove it.</h1>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
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
