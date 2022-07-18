import React, { createContext, useContext } from 'react';

import { ProvidersList } from '../api';

interface ProvidersContextProps {
    data: ProvidersList[] | undefined;
    error: string;
    loading: boolean;
}

interface ProvidersProps extends ProvidersContextProps {
    children: React.ReactNode;
}

export const ProvidersContext = createContext<ProvidersContextProps>({
    data: [],
    error: '',
    loading: true,
});

const ProvidersListProvider: React.FC<ProvidersProps> = ({ data, error, loading, children }) => {
    return (
        <ProvidersContext.Provider value={{ data, error, loading }}>
            {children}
        </ProvidersContext.Provider>
    );
};

export default ProvidersListProvider;

export const useProviders = () => useContext(ProvidersContext);
