import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.main}>
      <Link className={styles.title} to="/">
        Event Management
      </Link>

      <div className={styles.components}>
        <Link className={styles.name} to="/">
          Home
        </Link>
        <Link className={styles.name} to="/admin">
          Admin
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
