import React, { useState } from "react";
import axios from "axios";
import styles from "./Attendance.module.css";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";

const AttendanceForm = () => {
  const { eventId } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/attendances", {
        event_id: eventId,
        email: email,
      });
      setEmail("");
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting attendance:", error);
    }
  };

  return (
    <section className={styles.head}>
      <Navbar />
      <div className={styles.main}>
        {submitted ? (
          <p>Attendance submitted successfully!</p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.label}>
              <label htmlFor="name" className={styles.info}>
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.inputField}
                required
              />
            </div>
            <div className={styles.label}>
              <label htmlFor="email" className={styles.info}>
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputField}
                required
              />
            </div>
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default AttendanceForm;
