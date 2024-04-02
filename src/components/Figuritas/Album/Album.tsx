import { album } from "../../../data/album";
import styles from "./album.module.css";
import Seccion from "../Seccion/Seccion";
import { Listado } from "../Listado/Listado";
import { useContext, useEffect, useState } from "react";
import { Album, FiguritaI } from "../../../interfaces/album.interface";
import { GoMoveToTop } from "react-icons/go";
import { animateScroll } from "react-scroll";
import { PiCopySimpleBold } from "react-icons/pi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AlbumContext } from "../../../context/album.context";

export default function ListaFiguritas() {
  const [albumData, setAlbumData] = useState({} as Album);
  const { setAlbumContextData } = useContext(AlbumContext);

  useEffect(() => {
    getAlbumData();
  }, []);

  useEffect(() => {
    calculatePercentaje();
  }, [albumData]);

  const getAlbumData = () => {
    const storedData = localStorage.getItem("figuritasData");
    setAlbumData(storedData ? JSON.parse(storedData) : album);
  };

  const modifyQuantity = (quantity: number, figurita: FiguritaI) => {
    const updatedAlbumData = { ...albumData };
    const sectionIndex = updatedAlbumData.secciones.findIndex((section) =>
      section.figuritas.some((fig) => fig.item === figurita.item)
    );
    const stickerIndex = updatedAlbumData.secciones[
      sectionIndex
    ].figuritas.findIndex((fig) => fig.item === figurita.item);
    updatedAlbumData.secciones[sectionIndex].figuritas[stickerIndex].cantidad +=
      quantity;
    setAlbumData(updatedAlbumData);
    localStorage.setItem("figuritasData", JSON.stringify(updatedAlbumData));
  };

  const calculatePercentaje = () => {
    let cantidadDeFiguritas = 0;

    if (albumData.secciones) {
      for (const seccion of albumData.secciones) {
        for (const figurita of seccion.figuritas) {
          if (figurita.cantidad > 0) {
            cantidadDeFiguritas++;
          }
        }
      }
    }
    const porcentaje = (cantidadDeFiguritas * 100) / albumData.totalDeFiguritas;

    setAlbumContextData({
      porcentajeCompletado: porcentaje.toFixed(2),
    });
  };

  const scrollToTop = () => {
    const options = {
      duration: 100,
      smooth: true,
    };
    animateScroll.scrollToTop(options);
  };

  const getSummary = () => {
    const nolaItems: string[] = [];
    const repeItems: string[] = [];

    for (const seccion of albumData.secciones) {
      for (const figurita of seccion.figuritas) {
        if (figurita.cantidad === 0) {
          nolaItems.push(figurita.item);
        } else if (figurita.cantidad > 1) {
          repeItems.push(figurita.item);
        }
      }
    }

    let summary = "";
    summary += "Nola: " + nolaItems.join(", ") + " - ";
    summary += "Repe: " + repeItems.join(", ");
    return summary.trim();
  };

  const copyAlbumData = () => {
    const albumData = getSummary();
    navigator.clipboard
      .writeText(albumData)
      .then(() => {
        toast.success(
          "Figuritas faltantes y repetidas copiadas en el portapapeles!"
        );
      })
      .catch(() => {
        toast.error("Error al copiar figuritas");
      });
  };

  return (
    <>
      <div className={styles.secciones}>
        <Listado album={albumData} />
      </div>
      <div className="d-flex justify-content-center">
        <img src="/src/assets/general/stars.svg" />
      </div>
      <div className={styles.secciones}>
        {albumData.secciones?.map((seccion) => (
          <Seccion
            key={seccion.codigo}
            seccion={seccion}
            modifyQuantity={modifyQuantity}
          />
        ))}
      </div>
      <div className={styles["buttons-container"]}>
        <div className={styles.button} onClick={scrollToTop}>
          <GoMoveToTop className={styles.top} />
        </div>
        <div className={styles.button} onClick={copyAlbumData}>
          <PiCopySimpleBold />
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
