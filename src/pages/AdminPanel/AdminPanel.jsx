import React from "react";
import AdminForm from "./AdminForm";
import Navbar from "../../components/Navbar";
import styles from "../AdminPanel/AdminPanel.module.css";

const AdminPanel = () => {
  return (
    <section className={styles.main}>
      <Navbar />
      <div>
        <AdminForm />
      </div>
    </section>
  );
};

export default AdminPanel;
