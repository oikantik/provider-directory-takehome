import { LocationsList, ProvidersList, fetchLocations, fetchProviders } from '../../api';
import MenuProvider from '../../contexts/menu';
import ProvidersListProvider from '../../contexts/providers';
import useFetch from '../../hooks/useFetch';
import Header from './Header';
import ProfileList from './ProfileList';

function Home() {
    const providersData = useFetch<ProvidersList[]>(fetchProviders);
    const menuData = useFetch<LocationsList[]>(fetchLocations);
    return (
        <ProvidersListProvider
            data={providersData.data}
            error={providersData.error}
            loading={providersData.loading}
        >
            <MenuProvider data={menuData.data} error={menuData.error} loading={menuData.loading}>
                <div className="min-h-screen w-[100%] bg-neutral2 flex-col pb-[40px]">
                    <Header />
                    <ProfileList />
                </div>
            </MenuProvider>
        </ProvidersListProvider>
    );
}

export default Home;
