import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { fetchProvider, ProvidersList } from "../api";

interface ProviderContextProps {
  provider: ProvidersList | undefined;
}

interface ProviderProps {
  id: string;
  children: React.ReactNode;
}

const ProviderContext = createContext<ProviderContextProps | null>(null);

const ProviderListProvider: React.FC<ProviderProps> = ({ id, children }) => {
  const [provider, setProvider] = useState<ProvidersList>();

  const fetchproviderList = useCallback(async () => {
    const data = await fetchProvider(id);
    console.log(data);
    setProvider(data);
  }, [id]);

  useEffect(() => {
    fetchproviderList();
  }, [fetchproviderList]);

  return (
    <ProviderContext.Provider value={{ provider }}>
      {children}
    </ProviderContext.Provider>
  );
};

export default ProviderListProvider;

export const useProvider = () => useContext(ProviderContext);
