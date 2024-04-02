import { Album } from "../../../interfaces/album.interface";
import styles from "./listado.module.css";
import { Link } from "react-scroll";

export const Listado = ({ album }: { album: Album }) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-start row text-center">
        {album.secciones?.map((seccion) => (
          <Link
            to={seccion.codigo.toLowerCase()}
            spy={true}
            smooth={true}
            duration={100}
            offset={-10}
            className={`ms-2 col-3 col-xl-2 ${styles.seccion}`}
            key={seccion.codigo}
          >
            {seccion.nombre}
          </Link>
        ))}
      </div>
    </>
  );
};
