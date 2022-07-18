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
  loading: boolean;
}

interface ProvidersProps {
  children: React.ReactNode;
}

export const ProvidersContext = createContext<ProvidersContextProps>({
  providers: [],
  loading: false,
});

const ProvidersListProvider: React.FC<ProvidersProps> = ({ children }) => {
  const [providers, setProviders] = useState<ProvidersList[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProvidersList = useCallback(async () => {
    const data = await fetchProviders();
    console.log(data);
    setProviders(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProvidersList();
  }, [fetchProvidersList]);

  return (
    <ProvidersContext.Provider value={{ providers, loading }}>
      {children}
    </ProvidersContext.Provider>
  );
};

export default ProvidersListProvider;

export const useProviders = () => useContext(ProvidersContext);
