import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import eventList from "../../datas/events";
import styles from "../Home/Home.module.css";

const Home = () => {
  const eventsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = eventList.slice(indexOfFirstEvent, indexOfLastEvent);

  const totalPages = Math.ceil(eventList.length / eventsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section>
      <Navbar />
      <div className={styles.main}>
        <p className={styles.pageTitle}>Upcoming Events</p>

        <div className={styles.eventList}>
          {currentEvents.map((data, index) => (
            <div key={data.title} className={styles.eventBox}>
              <p className={styles.title}>
                {indexOfFirstEvent + index + 1}. {data.title}
              </p>

              <div className={styles.boxContents}>
                <img
                  src={data.image}
                  alt={data.title}
                  width="400"
                  height="300"
                />

                <div className={styles.cardContents}>
                  <p className={styles.description}>{data.description}</p>
                  <Link className={styles.button} to={data.link}>
                    {data.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.pagination}>
          <button onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span className={styles.pageNumber}>
            {currentPage} of {totalPages}
          </span>
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
