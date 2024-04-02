import { FaGithub } from "react-icons/fa";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <a target="_blank" href="https://github.com/tomasmarenco">
          <FaGithub className={styles.logo} />
        </a>
      </div>
    </>
  );
}
