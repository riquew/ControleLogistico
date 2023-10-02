import { Link } from "react-router-dom";
import styles from "./BackButton.module.css";

const BackButton = () => {
  return (
    <Link to="/">
      <div className={styles.backButton}>
        <i className={styles.backArrow}></i>
      </div>
    </Link>
  );
};

export default BackButton;
