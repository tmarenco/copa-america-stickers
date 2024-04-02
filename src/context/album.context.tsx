import { createContext } from "react";

export interface IAlbumData {
  porcentajeCompletado: string;
}

export interface AlbumContext {
  albumContextData: IAlbumData;
  setAlbumContextData: React.Dispatch<React.SetStateAction<IAlbumData>>;
}

export const AlbumContext = createContext({} as AlbumContext);
