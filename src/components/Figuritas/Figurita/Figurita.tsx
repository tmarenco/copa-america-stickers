import { IoAddCircle, IoRemoveCircle } from "react-icons/io5";
import styles from "./figurita.module.css";
import { FiguritaI } from "../../../interfaces/album.interface";

export default function Figurita({
  figurita,
  modifyQuantity,
}: {
  figurita: FiguritaI;
  modifyQuantity: (quantity: number, figurita: FiguritaI) => void;
}) {
  return (
    <>
      <div
        className={`d-flex align-items-center justify-content-center my-3 ${styles.figuritaWrapper}`}
      >
        <IoRemoveCircle
          className={`${styles.icon} ${
            figurita.cantidad === 0 ? styles.disabled : ""
          }`}
          onClick={
            figurita.cantidad === 0
              ? () => null
              : () => modifyQuantity(-1, figurita)
          }
        />
        <div
          className={`${styles["figurita-container"]} ${
            figurita.cantidad === 0 ? styles.nola : styles.late
          }`}
        >
          <p className={styles.figurita}>{figurita.item}</p>
          <span className={styles.cantidad}>{figurita.cantidad}</span>
        </div>
        <IoAddCircle
          className={styles.icon}
          onClick={() => modifyQuantity(+1, figurita)}
        />
      </div>
    </>
  );
}
{
  /* <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex align-items-center justify-content-center my-3"> */
}
