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
  loading: boolean;
}

interface ProviderProps {
  id: string;
  children: React.ReactNode;
}

const ProviderContext = createContext<ProviderContextProps>({
  provider: undefined,
  loading: true,
});

const ProviderListProvider: React.FC<ProviderProps> = ({ id, children }) => {
  const [provider, setProvider] = useState<ProvidersList>();
  const [loading, setLoading] = useState(true);

  const fetchproviderList = useCallback(async () => {
    const data = await fetchProvider(id);
    console.log(data);
    setProvider(data);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetchproviderList();
  }, [fetchproviderList]);

  return (
    <ProviderContext.Provider value={{ provider, loading }}>
      {children}
    </ProviderContext.Provider>
  );
};

export default ProviderListProvider;

export const useProvider = () => useContext(ProviderContext);
