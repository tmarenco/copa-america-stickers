import { useContext } from "react";
import styles from "./header.module.css";
import { AlbumContext } from "../../context/album.context";

export default function Header() {
  const {
    albumContextData: { porcentajeCompletado },
  } = useContext(AlbumContext);

  return (
    <>
      <div className={styles.header}>
        <div className={styles["header-content"]}>
          <img
            src="/src/assets/header/logo24.png"
            alt="logo"
            className="h-75"
          />
          <div className={styles["header-avance"]}>
            <h3 className={styles.text}>Tu avance:</h3>
            <h3>% {porcentajeCompletado}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
