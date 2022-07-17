import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { fetchProviders, ProvidersList } from "../api";

interface ProvidersContextProps {
  providers: ProvidersList[];
}

interface ProvidersProps {
  children: React.ReactNode;
}

export const ProvidersContext = createContext<ProvidersContextProps | null>(
  null
);

const ProvidersListProvider: React.FC<ProvidersProps> = ({ children }) => {
  const [providers, setProviders] = useState<ProvidersList[]>([]);

  const fetchProvidersList = useCallback(async () => {
    const data = await fetchProviders();
    console.log(data);
    setProviders(data);
  }, []);

  useEffect(() => {
    fetchProvidersList();
  }, [fetchProvidersList]);

  return (
    <ProvidersContext.Provider value={{ providers }}>
      {children}
    </ProvidersContext.Provider>
  );
};

export default ProvidersListProvider;

export const useProviders = () => useContext(ProvidersContext);
