import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../Home/OngoingEvent.module.css";
import axios from "axios";
import Navbar from "../../components/Navbar";

const OngoingEvent = () => {
  const eventsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/events", { withCredentials: true })
      .then((response) => {
        const currentDate = new Date().toISOString().split("T")[0];
        const filteredEvents = response.data.data.filter(
          (event) => event.start_date.split("T")[0] === currentDate
        );
        setEventList(filteredEvents);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

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
      <div className={styles.main}>
        <p className={styles.pageTitle}>Ongoing Events</p>

        <div className={styles.eventList}>
          {currentEvents.map((data, index) => (
            <div key={data.id} className={styles.eventBox}>
              <p className={styles.title}>
                {indexOfFirstEvent + index + 1}. {data.title}
              </p>

              <div className={styles.boxContents}>
                <img
                  src={data.image_url}
                  alt={data.title}
                  width="400"
                  height="300"
                />

                <div className={styles.cardContents}>
                  <p className={styles.description}>{data.description}</p>
                  <Link
                    className={styles.button}
                    to={`ongoing/event/${data.id}`}
                  >
                    See More
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

export default OngoingEvent;
