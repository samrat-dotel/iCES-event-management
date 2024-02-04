import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import styles from "./Register.module.css";
import EventList from "../../datas/events";

const Register = () => {
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [faculty, setFaculty] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      console.log(
        "Phone number must consist of 10 digits and contain only integers."
      );
      return;
    }
    const participantsDetail = {
      name: name,
      college: college,
      faculty: faculty,
      email: email,
      phone: phone,
    };
    console.log("Participants Detail:", participantsDetail);
  };

  return (
    <section className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        {" "}
        <div className={styles.header}>
          <h2 className={styles.title}>Participant Registration</h2>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            <span className={styles.info}>Name:</span>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.inputField}
              required
            />
          </label>
          <label className={styles.label}>
            <span className={styles.info}>College:</span>
            <input
              type="text"
              value={college}
              placeholder="Enter your college name"
              onChange={(e) => setCollege(e.target.value)}
              className={styles.inputField}
              required
            />
          </label>
          <label className={styles.label}>
            <span className={styles.info}>Faculty:</span>
            <input
              type="text"
              placeholder="Enter your faculty"
              value={faculty}
              onChange={(e) => setFaculty(e.target.value)}
              className={styles.inputField}
              required
            />
          </label>
          <label className={styles.label}>
            <span className={styles.info}>Email:</span>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.inputField}
              required
            />
          </label>
          <label className={styles.label}>
            <span className={styles.info}>Phone Number:</span>
            <input
              type="tel"
              placeholder="Your number please"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={styles.inputField}
              required
              pattern="[0-9]{10}"
            />
          </label>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
