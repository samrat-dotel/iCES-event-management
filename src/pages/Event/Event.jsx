import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import styles from "../Event/Event.module.css";
import axios from "axios";

const Event = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/events/${eventId}`)
      .then((response) => {
        setEvent(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching event:", error);
        setLoading(false);
      });
  }, [eventId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <section>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.contents}>
            <img
              src={event.image_url}
              alt={event.title}
              width="600"
              height="500"
            />
            <p className={styles.title}>{event.title}</p>
          </div>
          <p className={styles.description}>{event.description}</p>
          <div className={styles.specialBox}>
            <div className={styles.specials}>
              <p className={styles.text}>
                <span className={styles.tag}>Event coordinator: </span>
                <span className={styles.elements}> {event.coordinator}</span>
              </p>
              <p className={styles.text}>
                <span className={styles.tag}>Event sub-coordinator: </span>
                <span className={styles.elements}>{event.sub_coordinator}</span>
              </p>
              <p className={styles.text}>
                <span className={styles.tag}>Start date: </span>
                <span className={styles.elements}>{event.start_date}</span>
              </p>
              <p className={styles.text}>
                <span className={styles.tag}>End date: </span>
                <span className={styles.elements}>{event.end_date}</span>
              </p>
              <p className={styles.text}>
                <span className={styles.tag}>Venue: </span>
                <span className={styles.elements}>{event.venue}</span>
              </p>
            </div>
            <Link className={styles.button} type="button" to="/">
              Register now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
