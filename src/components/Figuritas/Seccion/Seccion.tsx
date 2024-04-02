import {
  FiguritaI,
  Seccion as SeccionInterface,
} from "../../../interfaces/album.interface";
import Figurita from "../Figurita/Figurita";
import styles from "./seccion.module.css";

interface Props {
  seccion: SeccionInterface;
  modifyQuantity: (quantity: number, figurita: FiguritaI) => void;
}

export default function Seccion({ seccion, modifyQuantity }: Props) {
  return (
    <>
      <div
        id={seccion.codigo.toLowerCase()}
        className="d-flex justify-content-between"
      >
        <h1
          className={`${styles.title} ${
            seccion.codigo === "ARG" ? styles.gold : ""
          }`}
        >
          {seccion.nombre}
        </h1>
        <img
          className={styles.logo}
          src={`/src/assets/flags/${seccion.codigo}.${
            seccion.codigo === "INTR" ? "png" : "svg"
          }`}
          alt={seccion.codigo}
        />
      </div>
      <div className="container">
        <div className="row">
          {seccion?.figuritas.map((figurita) => (
            <Figurita
              key={figurita.item}
              figurita={figurita}
              modifyQuantity={modifyQuantity}
            />
          ))}
        </div>
      </div>
    </>
  );
}
