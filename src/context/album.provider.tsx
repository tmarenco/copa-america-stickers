import { useState } from "react";
import { AlbumContext, IAlbumData } from "./album.context";

export const AlbumProvider = ({ children }: React.PropsWithChildren) => {
  const [albumContextData, setAlbumContextData] = useState<IAlbumData>({
    porcentajeCompletado: "0",
  });

  return (
    <AlbumContext.Provider value={{ albumContextData, setAlbumContextData }}>
      {children}
    </AlbumContext.Provider>
  );
};
