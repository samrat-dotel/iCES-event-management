import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import styles from "./Register.module.css"; // Importing styles from Register.module.css

const Register = () => {
  // State variables for form fields
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [faculty, setFaculty] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any field is empty
    if (!name || !college || !faculty || !email || !phone) {
      console.log("All fields are required.");
      return;
    }
    // Validate phone number format
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      console.log(
        "Phone number must consist of 10 digits and contain only integers."
      );
      return;
    }
    // Create an object with form field values
    const participantsDetail = {
      name: name,
      college: college,
      faculty: faculty,
      email: email,
      phone: phone,
    };
    // Log the object in the console
    console.log("Participants Detail:", participantsDetail);
    // Perform any necessary actions with the form data
    // Add logic for submitting the data to your backend or performing other actions
  };

  return (
    <section>
      <Navbar />
      <div className={styles.container}>
        {" "}
        <h2 className={styles.title}>Participant Registration</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.inputField}
              required
            />
          </label>
          <label className={styles.label}>
            College:
            <input
              type="text"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              className={styles.inputField}
              required
            />
          </label>
          <label className={styles.label}>
            Faculty:
            <input
              type="text"
              value={faculty}
              onChange={(e) => setFaculty(e.target.value)}
              className={styles.inputField}
              required
            />
          </label>
          <label className={styles.label}>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.inputField}
              required
            />
          </label>
          <label className={styles.label}>
            Phone Number:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={styles.inputField}
              required
              pattern="[0-9]{10}"
            />
          </label>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
