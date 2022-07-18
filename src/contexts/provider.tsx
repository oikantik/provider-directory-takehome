import React, { createContext, useContext } from 'react';

import { ProvidersList } from '../api';

interface ProviderContextProps {
    data: ProvidersList | undefined;
    error: string;
    loading: boolean;
}

interface ProviderProps extends ProviderContextProps {
    children: React.ReactNode;
}

const ProviderContext = createContext<ProviderContextProps>({
    data: undefined,
    loading: true,
    error: '',
});

const ProviderListProvider: React.FC<ProviderProps> = ({ data, error, loading, children }) => {
    return (
        <ProviderContext.Provider value={{ data, error, loading }}>
            {children}
        </ProviderContext.Provider>
    );
};

export default ProviderListProvider;

export const useProvider = () => useContext(ProviderContext);
