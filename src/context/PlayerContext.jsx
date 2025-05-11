import { createContext, useState, useContext } from "react";
import { dataList } from "../db/data";

// Creiamo il contesto
const PlayerContext = createContext();

// Hook personalizzato per usare il contesto più facilmente
export const usePlayer = () => useContext(PlayerContext);

// Provider che avvolgerà l'applicazione
export const PlayerProvider = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState(dataList[1]);


    return (
        <PlayerContext.Provider value={{ currentTrack, setCurrentTrack }}>
            {children}
        </PlayerContext.Provider>
    );
};
