// In React, il "context" è un modo per condividere dati tra i componenti senza dover passare esplicitamente le props attraverso ogni livello della gerarchia dei componenti. Il contesto consente di creare un "canale" attraverso il quale è possibile trasmettere dati a tutti i componenti figli senza doverli passare uno per uno manualmente.

// Il contesto è particolarmente utile quando si ha la necessità di condividere uno stato globale o funzioni comuni tra i componenti, evitando il passaggio di props attraverso molteplici livelli di componenti intermedi.

// UserContent.tsx
import axios from "axios";
import { createContext, ReactNode, Dispatch, SetStateAction, useState, useEffect } from "react";

interface UserContextProps {
  user: any; 
  setUser: Dispatch<SetStateAction<any>>;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
});

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);

  //attualmente la chiamata viene effettuata due volte perche' siamo in dev mode strict
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('/profile');
        setUser(response.data);
      } catch (error) {
        console.error('Errore durante la richiesta del profilo:', error);
      }
    };
    if (!user) {
      fetchProfileData();
    }
  }, [user]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
