import React, { useState } from "react";
import styles from "./AdminForm.module.css";
import axios from "axios";

const AdminForm = () => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [coordinator, setCoordinator] = useState("");
  const [subCoordinator, setSubCoordinator] = useState("");
  const [description, setDescription] = useState("");
  const [venue, setVenue] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminFormData = {
      title: title,
      start_date: startDate,
      end_date: endDate,
      coordinator: coordinator,
      sub_coordinator: subCoordinator,
      description: description,
      venue: venue,
      cover_image: image,
    };

    console.log("Admin Form Data:", adminFormData);

    axios
      .post(
        `http://localhost:3000/events`,

        adminFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      )
      .then(() => {
        console.log("Event created successfully.");
      })
      .catch((error) => {
        console.error("Error creating the event:", error);
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    const previewURL = URL.createObjectURL(file);
    setImagePreview(previewURL);
  };

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        {" "}
        <div className={styles.header}>
          <h2 className={styles.title}>Admin Event Form</h2>
          <label className={styles.labelImage}>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Event Preview"
                className={styles.imagePreview}
                width="800"
                height={400}
              />
            )}
            <span className={styles.info}>Add Image:</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className={styles.inputField}
            />
          </label>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            <span className={styles.info}>Title:</span>
            <input
              type="text"
              placeholder="Enter event title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.inputField}
              required
            />
          </label>
          <label className={styles.label}>
            <span className={styles.info}>Start Date:</span>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={styles.inputField}
              required
            />
          </label>
          <label className={styles.label}>
            <span className={styles.info}>End Date:</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className={styles.inputField}
              required
            />
          </label>
          <label className={styles.label}>
            <span className={styles.info}>Coordinator:</span>
            <input
              type="text"
              placeholder="Enter coordinator name"
              value={coordinator}
              onChange={(e) => setCoordinator(e.target.value)}
              className={styles.inputField}
              required
            />
          </label>
          <label className={styles.label}>
            <span className={styles.info}>Sub Coordinator:</span>
            <input
              type="text"
              placeholder="Enter sub-coordinator name"
              value={subCoordinator}
              onChange={(e) => setSubCoordinator(e.target.value)}
              className={styles.inputField}
              required
            />
          </label>
          <label className={styles.label}>
            <span className={styles.info}>Description:</span>
            <textarea
              placeholder="Enter event description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={styles.inputField}
              required
            />
          </label>
          <label className={styles.label}>
            <span className={styles.info}>Venue:</span>
            <input
              type="text"
              placeholder="Enter event venue"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              className={styles.inputField}
              required
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

export default AdminForm;
