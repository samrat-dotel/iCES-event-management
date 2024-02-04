import React, { useState } from "react";
import Navbar from "../../components/Navbar";


const Register = () => {
  // State variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Age:", age);
    console.log("Gender:", gender);
    // Add logic for submitting the data to your backend or performing other actions
  };

  return (
    <section>
      <Navbar />
      <div className="registration-form-container">
        <h2>Participant Registration</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </label>
          <label>
            Gender:
            <select value={gender} onChange={(e) => setGender(e.target.value)} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Register;
