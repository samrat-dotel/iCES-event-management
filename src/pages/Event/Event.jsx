import React from "react";
import { Link, useParams } from "react-router-dom";
import EventList from "../../datas/events";
import Navbar from "../../components/Navbar";
import styles from "../Event/Event.module.css";

const Event = () => {
  const { eventId } = useParams();

  const selectedEvent = EventList.find((event) => event.index === +eventId);

  if (!selectedEvent) {
    return <div>Event not found</div>;
  }

  return (
    <section>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.contents}>
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              width="600"
              height="500"
            />
            <p className={styles.title}>{selectedEvent.title}</p>
          </div>
          <p className={styles.description}>{selectedEvent.description}</p>
          <div className={styles.specials}>
            <p className={styles.text}>
              Event coordinator:{" "}
              <span className={styles.elements}>
                {" "}
                {selectedEvent.coordinator}
              </span>
            </p>
            <p className={styles.text}>
              Event sub-coordinator:{" "}
              <span className={styles.elements}>
                {selectedEvent.subcoordinator}
              </span>
            </p>
            <p className={styles.text}>
              Start date:{" "}
              <span className={styles.elements}>{selectedEvent.startDate}</span>
            </p>
            <p className={styles.text}>
              End date:{" "}
              <span className={styles.elements}>{selectedEvent.endDate}</span>
            </p>
            <p className={styles.text}>
              Time:{" "}
              <span className={styles.elements}>{selectedEvent.time}</span>
            </p>
          </div>
          <Link className={styles.button} type="button" to="/">
            Register now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Event;
